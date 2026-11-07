import { ArrowUpRight } from 'lucide-react'

import featuredImage from '../assets/imoveis/casa-afonso-queiroz-750-wide.webp'
import { featured, whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { Reveal } from './Reveal'

export function FeaturedSection() {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Imagem */}
        <Reveal fade className="relative order-1 overflow-hidden lg:order-none">
          <img
            src={featuredImage}
            alt="Ambiente integrado de uma casa em Patos de Minas"
            width={780}
            height={330}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[34rem]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-forest/35 to-transparent lg:bg-linear-to-r"
          />
        </Reveal>

        {/* Texto */}
        <div className="order-2 bg-forest px-6 py-16 sm:px-10 sm:py-20 lg:order-none lg:px-16 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-lg lg:mx-0">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold-light">
                <span aria-hidden="true" className="h-px w-9 bg-current opacity-60" />
                {featured.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 text-balance text-[2rem] leading-[1.14] text-white sm:text-[2.6rem] lg:text-[2.9rem]">
                {featured.title}
              </h2>
            </Reveal>

            <Reveal delay={190}>
              <p className="mt-6 text-[0.98rem] leading-[1.8] text-white/70">
                {featured.description}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-10 border-l border-gold pl-6 font-display text-[1.5rem] leading-snug text-gold-light sm:text-[1.75rem]">
                {featured.highlight}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <a
                href={whatsappUrl(whatsappMessages.leaveRent)}
                {...externalLinkProps}
                className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-gold-light px-7 py-4 text-[0.85rem] font-medium tracking-wide text-forest transition-all duration-400 hover:bg-gold-pale hover:shadow-[0_18px_40px_-18px_rgba(210,181,116,0.85)]"
              >
                {featured.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
