/**
 * ------------------------------------------------------------------
 *  BUSCA AVANÇADA
 * ------------------------------------------------------------------
 *  Toda a lógica de filtragem e ordenação vive aqui, separada da
 *  interface. Quando os imóveis vierem de uma API, só a origem da
 *  lista muda — estas funções continuam valendo.
 * ------------------------------------------------------------------
 */

import type { Property, PropertyCategory } from '../data/properties'

export type SortOption = 'destaque' | 'menor-preco' | 'maior-preco' | 'maior-area'

export interface PropertyQuery {
  category: PropertyCategory | 'todos'
  /** Busca livre por bairro, tipo ou característica. */
  term: string
  /** Bairro exato; string vazia = todos. */
  neighborhood: string
  /** Mínimos; 0 = qualquer. */
  minBedrooms: number
  minSuites: number
  minBathrooms: number
  minParking: number
  /** Faixa de preço em reais; 0 = sem limite. */
  minPrice: number
  maxPrice: number
  /** Área mínima em m²; 0 = qualquer. */
  minArea: number
  sort: SortOption
}

export const emptyQuery: PropertyQuery = {
  category: 'todos',
  term: '',
  neighborhood: '',
  minBedrooms: 0,
  minSuites: 0,
  minBathrooms: 0,
  minParking: 0,
  minPrice: 0,
  maxPrice: 0,
  minArea: 0,
  sort: 'destaque',
}

export const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'destaque', label: 'Seleção do Marcos' },
  { id: 'menor-preco', label: 'Menor preço' },
  { id: 'maior-preco', label: 'Maior preço' },
  { id: 'maior-area', label: 'Maior área' },
]

/** Área considerada nas buscas: construída, total ou terreno, nessa ordem. */
export function propertyArea(property: Property): number {
  return property.builtArea ?? property.totalArea ?? property.landArea ?? 0
}

/** Remove acentos e caixa para comparar texto digitado. */
function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
}

function matchesTerm(property: Property, term: string): boolean {
  const needle = normalize(term)
  if (!needle) return true

  const haystack = normalize(
    [
      property.neighborhood,
      property.kind,
      property.city,
      ...property.highlights,
    ].join(' '),
  )

  // Todas as palavras digitadas precisam aparecer.
  return needle.split(/\s+/).every((word) => haystack.includes(word))
}

export function searchProperties(list: Property[], query: PropertyQuery): Property[] {
  const result = list.filter((property) => {
    if (query.category !== 'todos' && !property.categories.includes(query.category)) {
      return false
    }
    if (query.neighborhood && property.neighborhood !== query.neighborhood) return false
    if (property.bedrooms < query.minBedrooms) return false
    if ((property.suites ?? 0) < query.minSuites) return false
    if (property.bathrooms < query.minBathrooms) return false
    if (property.parking < query.minParking) return false
    if (query.minPrice && property.price < query.minPrice) return false
    if (query.maxPrice && property.price > query.maxPrice) return false
    if (query.minArea && propertyArea(property) < query.minArea) return false
    if (!matchesTerm(property, query.term)) return false
    return true
  })

  switch (query.sort) {
    case 'menor-preco':
      return result.sort((a, b) => a.price - b.price)
    case 'maior-preco':
      return result.sort((a, b) => b.price - a.price)
    case 'maior-area':
      return result.sort((a, b) => propertyArea(b) - propertyArea(a))
    default:
      return result
  }
}

/** Bairros disponíveis, sem repetição e em ordem alfabética. */
export function neighborhoodOptions(list: Property[]): string[] {
  return [...new Set(list.map((property) => property.neighborhood))].sort((a, b) =>
    a.localeCompare(b, 'pt-BR'),
  )
}

/**
 * Degraus de preço que cobrem a carteira, arredondados para baixo/cima
 * na dezena de milhar mais próxima.
 */
export function priceSteps(list: Property[], step = 50000): number[] {
  if (list.length === 0) return []

  const prices = list.map((property) => property.price)
  const first = Math.floor(Math.min(...prices) / step) * step
  const last = Math.ceil(Math.max(...prices) / step) * step

  const steps: number[] = []
  for (let value = first; value <= last; value += step) steps.push(value)
  return steps
}

/** Degraus de área presentes na carteira. */
export function areaSteps(list: Property[]): number[] {
  if (list.length === 0) return []
  const max = Math.max(...list.map(propertyArea))
  return [50, 70, 100, 150, 200, 250].filter((value) => value <= max)
}

/** Quantos campos da busca avançada estão em uso (categoria e ordenação não contam). */
export function countActiveFilters(query: PropertyQuery): number {
  let total = 0
  if (query.term.trim()) total += 1
  if (query.neighborhood) total += 1
  if (query.minBedrooms) total += 1
  if (query.minSuites) total += 1
  if (query.minBathrooms) total += 1
  if (query.minParking) total += 1
  if (query.minPrice) total += 1
  if (query.maxPrice) total += 1
  if (query.minArea) total += 1
  return total
}
