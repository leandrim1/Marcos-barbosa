import { ArrowUpRight, BedDouble, Car, Maximize, ShowerHead } from 'lucide-react'

import type { Property } from '../data/properties'
import { propertyInterestMessage } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { formatArea, formatPrice } from '../lib/format'

interface PropertyCardProps {
  property: Property
  /** Prioriza o carregamento das primeiras imagens da grade. */
  eager?: boolean
}

export function PropertyCard({ property, eager = false }: PropertyCardProps) {
  const price = formatPrice(property.price)
  const area = property.builtArea ?? property.totalArea ?? property.landArea

  const specs = [
    {
      icon: BedDouble,
      value: property.bedrooms,
      label: property.bedrooms === 1 ? 'quarto' : 'quartos',
    },
    {
      icon: ShowerHead,
      value: property.bathrooms,
      label: property.bathrooms === 1 ? 'banheiro' : 'banheiros',
    },
    {
      icon: Car,
      value: property.parking,
      label: property.parking === 1 ? 'vaga' : 'vagas',
    },
  ]

  const message = propertyInterestMessage({
    kind: property.kind,
    neighborhood: property.neighborhood,
    price,
  })

  return (
    <article className="group flex h-full flex-col border border-line bg-white transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_30px_60px_-40px_rgba(32,37,33,0.55)]">
      {/* Imagem */}
      <div className="relative overflow-hidden bg-cream">
        <img
          src={property.image}
          alt={property.imageAlt}
          width={780}
          height={480}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="aspect-[13/8] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
        />

        <span className="absolute left-0 top-0 bg-white/92 px-3.5 py-2 text-[0.63rem] font-medium uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
          {property.kind}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow text-gold-deep">{property.city}</p>

        <h3 className="mt-2.5 font-display text-[1.45rem] leading-tight text-ink">
          Bairro {property.neighborhood}
        </h3>

        {area ? (
          <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-muted">
            <Maximize className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
            {property.builtArea
              ? `${formatArea(property.builtArea)} construídos`
              : property.totalArea
                ? `${formatArea(property.totalArea)} de área total`
                : `${formatArea(property.landArea as number)} de terreno`}
            {property.landArea && property.builtArea
              ? ` · terreno de ${formatArea(property.landArea)}`
              : ''}
          </p>
        ) : null}

        {/* Especificações */}
        <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-y border-line py-4">
          {specs.map((spec) => (
            <li key={spec.label} className="flex items-center gap-2 text-[0.8rem] text-ink/80">
              <spec.icon className="h-4 w-4 text-gold" aria-hidden="true" />
              <span className="font-medium">{spec.value}</span>
              <span className="text-muted">{spec.label}</span>
            </li>
          ))}
        </ul>

        {/* Destaques */}
        <ul className="mt-5 space-y-2">
          {property.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-[0.82rem] leading-snug text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1 w-1 shrink-0 rotate-45 bg-gold/70"
              />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Preço + CTA */}
        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted">Valor</p>
              <p className="mt-1.5 font-display text-[1.6rem] leading-none text-ink">{price}</p>
              {property.condoFee ? (
                <p className="mt-1.5 text-[0.72rem] text-muted">
                  Condomínio {formatPrice(property.condoFee)}
                </p>
              ) : null}
            </div>
          </div>

          <a
            href={whatsappUrl(message)}
            {...externalLinkProps}
            aria-label={`Tenho interesse: ${property.kind} no bairro ${property.neighborhood}`}
            className="group/cta mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest bg-white px-6 py-3.5 text-[0.82rem] font-medium tracking-wide text-forest transition-all duration-400 hover:bg-forest hover:text-white"
          >
            Tenho interesse
            <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}
