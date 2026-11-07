import { ArrowUpRight, SearchX } from 'lucide-react'
import { useMemo, useState } from 'react'

import type { PropertyCategory } from '../data/properties'
import { filterProperties, properties, propertyFilters } from '../data/properties'
import { propertiesSection, whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { PropertyCard } from './PropertyCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Filter = PropertyCategory | 'todos'

export function Properties() {
  const [filter, setFilter] = useState<Filter>('todos')

  const visible = useMemo(() => filterProperties(properties, filter), [filter])

  const counts = useMemo(() => {
    const entries = propertyFilters.map(
      (item) => [item.id, filterProperties(properties, item.id).length] as const,
    )
    return Object.fromEntries(entries) as Record<Filter, number>
  }, [])

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

        {/* Filtros */}
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Filtrar imóveis por tipo"
            className="no-scrollbar mt-12 -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {propertyFilters.map((item) => {
              const isActive = filter === item.id
              const count = counts[item.id] ?? 0

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
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
        </Reveal>

        {/* Grade */}
        {visible.length > 0 ? (
          <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((property, index) => (
              <Reveal
                key={property.id}
                delay={Math.min(index, 5) * 80}
                className="h-full"
              >
                <PropertyCard property={property} eager={index < 3} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-12 border border-dashed border-line bg-cream px-8 py-16 text-center">
              <SearchX className="mx-auto h-7 w-7 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-[1.6rem] text-ink">
                Ainda não há imóveis publicados nesta categoria.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted">
                A carteira é atualizada constantemente e nem toda oportunidade chega a ser
                anunciada. Me conte o que você procura e eu verifico o que está disponível.
              </p>
              <a
                href={whatsappUrl(whatsappMessages.findProperty)}
                {...externalLinkProps}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[0.82rem] font-medium tracking-wide text-white transition-all duration-400 hover:bg-forest-soft"
              >
                Falar com Marcos
                <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
