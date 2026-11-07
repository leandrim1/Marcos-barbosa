import { ChevronDown, RotateCcw, Search } from 'lucide-react'
import type { ReactNode } from 'react'
import { useId } from 'react'

import type { Property } from '../data/properties'
import { formatPrice } from '../lib/format'
import type { PropertyQuery, SortOption } from '../lib/search'
import { areaSteps, neighborhoodOptions, priceSteps, sortOptions } from '../lib/search'

interface PropertySearchProps {
  list: Property[]
  query: PropertyQuery
  onChange: (patch: Partial<PropertyQuery>) => void
  onReset: () => void
  resultCount: number
  activeFilters: number
}

/** Campo com rótulo no estilo editorial (linha fina, sem caixa). */
function Field({
  label,
  children,
  className = '',
  htmlFor,
}: {
  label: string
  children: ReactNode
  className?: string
  htmlFor: string
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="eyebrow block text-muted">
        {label}
      </label>
      <div className="relative mt-2.5">{children}</div>
    </div>
  )
}

const fieldClass =
  'w-full appearance-none border-0 border-b border-line bg-transparent pb-2.5 pr-7 text-[0.92rem] text-ink transition-colors duration-300 outline-none focus:border-gold'

const selectClass = `${fieldClass} cursor-pointer`

function Chevron() {
  return (
    <ChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-3 h-4 w-4 text-gold"
      strokeWidth={1.6}
    />
  )
}

/** Opções "qualquer / 1+ / 2+ ..." usadas nos campos numéricos. */
function MinOptions({ max, unit }: { max: number; unit: string }) {
  return (
    <>
      <option value={0}>Qualquer</option>
      {Array.from({ length: max }, (_, index) => index + 1).map((value) => (
        <option key={value} value={value}>
          {value}+ {unit}
        </option>
      ))}
    </>
  )
}

export function PropertySearch({
  list,
  query,
  onChange,
  onReset,
  resultCount,
  activeFilters,
}: PropertySearchProps) {
  const id = useId()
  const neighborhoods = neighborhoodOptions(list)
  const prices = priceSteps(list)
  const areas = areaSteps(list)

  return (
    <div className="border border-line bg-cream px-5 py-7 sm:px-8 sm:py-9">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-8 lg:grid-cols-4">
        {/* Busca livre */}
        <Field label="O que você procura" htmlFor={`${id}-term`} className="col-span-2">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-0 bottom-3 h-4 w-4 text-gold"
            strokeWidth={1.6}
          />
          <input
            id={`${id}-term`}
            type="search"
            value={query.term}
            onChange={(event) => onChange({ term: event.target.value })}
            placeholder="Bairro, tipo ou característica — ex.: área gourmet"
            className={`${fieldClass} pl-7 placeholder:text-muted/70`}
          />
        </Field>

        {/* Bairro */}
        <Field label="Bairro" htmlFor={`${id}-bairro`} className="col-span-2 sm:col-span-1">
          <select
            id={`${id}-bairro`}
            value={query.neighborhood}
            onChange={(event) => onChange({ neighborhood: event.target.value })}
            className={selectClass}
          >
            <option value="">Todos os bairros</option>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
          <Chevron />
        </Field>

        {/* Ordenação */}
        <Field label="Ordenar por" htmlFor={`${id}-ordem`} className="col-span-2 sm:col-span-1">
          <select
            id={`${id}-ordem`}
            value={query.sort}
            onChange={(event) => onChange({ sort: event.target.value as SortOption })}
            className={selectClass}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <Chevron />
        </Field>

        {/* Quartos */}
        <Field label="Quartos" htmlFor={`${id}-quartos`}>
          <select
            id={`${id}-quartos`}
            value={query.minBedrooms}
            onChange={(event) => onChange({ minBedrooms: Number(event.target.value) })}
            className={selectClass}
          >
            <MinOptions max={4} unit="quartos" />
          </select>
          <Chevron />
        </Field>

        {/* Suítes */}
        <Field label="Suítes" htmlFor={`${id}-suites`}>
          <select
            id={`${id}-suites`}
            value={query.minSuites}
            onChange={(event) => onChange({ minSuites: Number(event.target.value) })}
            className={selectClass}
          >
            <MinOptions max={2} unit="suítes" />
          </select>
          <Chevron />
        </Field>

        {/* Banheiros */}
        <Field label="Banheiros" htmlFor={`${id}-banheiros`}>
          <select
            id={`${id}-banheiros`}
            value={query.minBathrooms}
            onChange={(event) => onChange({ minBathrooms: Number(event.target.value) })}
            className={selectClass}
          >
            <MinOptions max={3} unit="banheiros" />
          </select>
          <Chevron />
        </Field>

        {/* Garagem */}
        <Field label="Garagem" htmlFor={`${id}-vagas`}>
          <select
            id={`${id}-vagas`}
            value={query.minParking}
            onChange={(event) => onChange({ minParking: Number(event.target.value) })}
            className={selectClass}
          >
            <MinOptions max={4} unit="vagas" />
          </select>
          <Chevron />
        </Field>

        {/* Valor mínimo */}
        <Field label="Valor mínimo" htmlFor={`${id}-min`}>
          <select
            id={`${id}-min`}
            value={query.minPrice}
            onChange={(event) => onChange({ minPrice: Number(event.target.value) })}
            className={selectClass}
          >
            <option value={0}>Sem mínimo</option>
            {prices.map((value) => (
              <option key={value} value={value}>
                {formatPrice(value)}
              </option>
            ))}
          </select>
          <Chevron />
        </Field>

        {/* Valor máximo */}
        <Field label="Valor máximo" htmlFor={`${id}-max`}>
          <select
            id={`${id}-max`}
            value={query.maxPrice}
            onChange={(event) => onChange({ maxPrice: Number(event.target.value) })}
            className={selectClass}
          >
            <option value={0}>Sem máximo</option>
            {prices.map((value) => (
              <option key={value} value={value}>
                {formatPrice(value)}
              </option>
            ))}
          </select>
          <Chevron />
        </Field>

        {/* Área mínima */}
        <Field label="Área mínima" htmlFor={`${id}-area`}>
          <select
            id={`${id}-area`}
            value={query.minArea}
            onChange={(event) => onChange({ minArea: Number(event.target.value) })}
            className={selectClass}
          >
            <option value={0}>Qualquer</option>
            {areas.map((value) => (
              <option key={value} value={value}>
                A partir de {value} m²
              </option>
            ))}
          </select>
          <Chevron />
        </Field>
      </div>

      {/* Rodapé do painel */}
      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-[0.84rem] text-muted">
          <span className="font-medium text-ink">{resultCount}</span>{' '}
          {resultCount === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          {activeFilters > 0 ? (
            <span className="text-muted/80">
              {' '}
              · {activeFilters} {activeFilters === 1 ? 'filtro ativo' : 'filtros ativos'}
            </span>
          ) : null}
        </p>

        <button
          type="button"
          onClick={onReset}
          disabled={activeFilters === 0}
          className="group inline-flex items-center gap-2 self-start text-[0.82rem] font-medium tracking-wide text-ink transition-colors duration-300 enabled:hover:text-gold-deep disabled:cursor-not-allowed disabled:text-muted/50 sm:self-auto"
        >
          <RotateCcw
            className="h-3.5 w-3.5 transition-transform duration-500 group-enabled:group-hover:-rotate-45"
            strokeWidth={1.6}
            aria-hidden="true"
          />
          Limpar filtros
        </button>
      </div>
    </div>
  )
}
