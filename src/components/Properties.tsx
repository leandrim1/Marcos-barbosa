import { ArrowUpRight, SearchX, SlidersHorizontal } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

import { properties, propertyFilters } from '../data/properties'
import type { PropertyCategory } from '../data/properties'
import { propertiesSection, whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import type { PropertyQuery } from '../lib/search'
import { countActiveFilters, emptyQuery, searchProperties } from '../lib/search'
import { PropertyCard } from './PropertyCard'
import { PropertySearch } from './PropertySearch'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Filter = PropertyCategory | 'todos'

/** A busca avançada já nasce aberta em telas grandes, recolhida no celular. */
function initialPanelState(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(min-width: 1024px)').matches
}

export function Properties() {
  const [query, setQuery] = useState<PropertyQuery>(emptyQuery)
  const [searchOpen, setSearchOpen] = useState(initialPanelState)

  const update = useCallback((patch: Partial<PropertyQuery>) => {
    setQuery((current) => ({ ...current, ...patch }))
  }, [])

  const reset = useCallback(() => {
    // A categoria e a ordenação escolhidas permanecem; só os campos da
    // busca avançada voltam ao estado inicial.
    setQuery((current) => ({ ...emptyQuery, category: current.category, sort: current.sort }))
  }, [])

  const visible = useMemo(() => searchProperties(properties, query), [query])
  const activeFilters = useMemo(() => countActiveFilters(query), [query])

  /** Contador de cada aba, já considerando os demais filtros em uso. */
  const counts = useMemo(() => {
    const entries = propertyFilters.map(
      (item) =>
        [item.id, searchProperties(properties, { ...query, category: item.id }).length] as const,
    )
    return Object.fromEntries(entries) as Record<Filter, number>
  }, [query])

  return (
    <section id="imoveis" className="relative bg-white py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={propertiesSection.eyebrow}
            title={propertiesSection.title}
            description={propertiesSection.description}
          />

          <Reveal delay={200} className="shrink-0">
            <a
              href={whatsappUrl(whatsappMessages.findProperty)}
              {...externalLinkProps}
              className="group inline-flex items-center gap-2 text-[0.84rem] font-medium tracking-wide text-ink transition-colors duration-300 hover:text-gold-deep"
            >
              Não encontrou? Me conte o que procura
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Abas de tipo + acesso à busca avançada */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="tablist"
              aria-label="Filtrar imóveis por tipo"
              className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {propertyFilters.map((item) => {
                const isActive = query.category === item.id
                const count = counts[item.id] ?? 0

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => update({ category: item.id })}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.8rem] font-medium tracking-wide transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'border-forest bg-forest text-white'
                        : 'border-line bg-white text-ink/70 hover:border-gold/50 hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`ml-2 text-[0.7rem] tabular-nums ${
                        isActive ? 'text-gold-light' : 'text-muted/70'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              aria-expanded={searchOpen}
              aria-controls="busca-avancada"
              className={`inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border px-5 py-2.5 text-[0.8rem] font-medium tracking-wide transition-all duration-400 lg:self-auto ${
                searchOpen || activeFilters > 0
                  ? 'border-gold/60 bg-white text-ink'
                  : 'border-line bg-white text-ink/70 hover:border-gold/50 hover:text-ink'
              }`}
            >
              <SlidersHorizontal className="h-4 w-4 text-gold" strokeWidth={1.6} />
              Busca avançada
              {activeFilters > 0 ? (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1.5 text-[0.68rem] font-semibold tabular-nums text-white">
                  {activeFilters}
                </span>
              ) : null}
            </button>
          </div>
        </Reveal>

        {/* Painel da busca avançada */}
        <div
          id="busca-avancada"
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            searchOpen ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <PropertySearch
              list={properties}
              query={query}
              onChange={update}
              onReset={reset}
              resultCount={visible.length}
              activeFilters={activeFilters}
            />
          </div>
        </div>

        {/* Grade */}
        {visible.length > 0 ? (
          <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((property, index) => (
              <Reveal key={property.id} delay={Math.min(index, 5) * 80} className="h-full">
                <PropertyCard property={property} eager={index < 3} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-12 border border-dashed border-line bg-cream px-8 py-16 text-center">
              <SearchX className="mx-auto h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-[1.6rem] text-ink">
                {activeFilters > 0
                  ? 'Nenhum imóvel atende a essa combinação de filtros.'
                  : 'Ainda não há imóveis publicados nesta categoria.'}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted">
                A carteira é atualizada constantemente e nem toda oportunidade chega a ser
                anunciada. Me conte o que você procura e eu verifico o que está disponível.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {activeFilters > 0 ? (
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-[0.82rem] font-medium tracking-wide text-ink transition-all duration-400 hover:border-gold hover:text-gold-deep"
                  >
                    Limpar filtros
                  </button>
                ) : null}

                <a
                  href={whatsappUrl(whatsappMessages.findProperty)}
                  {...externalLinkProps}
                  className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[0.82rem] font-medium tracking-wide text-white transition-all duration-400 hover:bg-forest-soft"
                >
                  Falar com Marcos
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={150}>
          <p className="mt-10 text-[0.74rem] leading-relaxed text-muted/80">
            Valores e disponibilidade sujeitos a alteração sem aviso prévio. As informações
            apresentadas são as divulgadas pelo proprietário e devem ser confirmadas no
            atendimento.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
