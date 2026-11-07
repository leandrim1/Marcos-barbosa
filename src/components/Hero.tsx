import { ArrowDown, ArrowUpRight } from 'lucide-react'

import heroImage from '../assets/imoveis/hero.webp'
import { properties } from '../data/properties'
import { hero, whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      {/* Painel creme que sustenta a composição editorial */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[46%] bg-cream lg:block"
      />

      <div className="shell relative">
        <div className="grid items-center gap-12 pt-32 pb-16 sm:pt-36 lg:grid-cols-12 lg:gap-16 lg:pt-44 lg:pb-28">
          {/* Coluna de texto */}
          <div className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-3 text-gold-deep opacity-0 [animation:mb-float-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]">
              <span aria-hidden="true" className="h-px w-9 bg-current opacity-60" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-7 text-balance text-[2.45rem] leading-[1.08] tracking-[-0.02em] text-ink opacity-0 [animation:mb-float-in_1s_cubic-bezier(0.22,1,0.36,1)_0.22s_forwards] sm:text-[3.2rem] lg:text-[3.15rem] xl:text-[3.6rem]">
              {hero.titleLead}{' '}
              <em className="not-italic text-gold">
                <span className="italic">{hero.titleAccent}</span>
              </em>{' '}
              {hero.titleTail}
            </h1>

            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-muted opacity-0 [animation:mb-float-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.36s_forwards]">
              {hero.description}
            </p>

            <ul className="mt-9 space-y-3 opacity-0 [animation:mb-float-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.46s_forwards]">
              {hero.facts.map((fact) => (
                <li key={fact} className="flex items-center gap-3 text-[0.86rem] text-ink/80">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rotate-45 bg-gold"
                  />
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 opacity-0 [animation:mb-float-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.56s_forwards] sm:flex-row sm:items-center">
              <a
                href={whatsappUrl(whatsappMessages.findProperty)}
                {...externalLinkProps}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-7 py-4 text-[0.85rem] font-medium tracking-wide text-white transition-all duration-400 hover:bg-forest-soft hover:shadow-[0_18px_40px_-18px_rgba(23,59,50,0.9)]"
              >
                {hero.primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={whatsappUrl(whatsappMessages.general)}
                {...externalLinkProps}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-4 text-[0.85rem] font-medium tracking-wide text-ink transition-all duration-400 hover:border-gold hover:text-gold-deep"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="relative lg:col-span-6 lg:col-start-7">
            <div className="relative opacity-0 [animation:mb-float-in_1.2s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]">
              <div className="overflow-hidden rounded-[2px] bg-cream shadow-[0_40px_80px_-50px_rgba(32,37,33,0.55)]">
                <img
                  src={heroImage}
                  alt="Sala de jantar de um imóvel em Patos de Minas apresentado por Marcos Barbosa"
                  width={1170}
                  height={720}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[13/8]"
                />
              </div>

              {/* Selo CRECI sobreposto, discreto */}
              <div className="absolute -bottom-8 left-6 hidden items-center gap-5 bg-white px-7 py-5 shadow-[0_28px_60px_-34px_rgba(32,37,33,0.55)] sm:flex lg:left-10">
                <span className="font-display text-[2.6rem] leading-none text-gold">
                  {properties.length}
                </span>
                <span className="text-[0.78rem] leading-snug tracking-wide text-ink/70">
                  imóveis selecionados
                  <br />
                  disponíveis agora
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicação de rolagem */}
        <div className="relative hidden pb-10 lg:block">
          <a
            href="#sobre"
            aria-label="Rolar para a próxima seção"
            className="group inline-flex items-center gap-3 text-muted transition-colors duration-300 hover:text-gold"
          >
            <span className="eyebrow">Role para conhecer</span>
            <ArrowDown className="h-4 w-4 [animation:mb-scroll-hint_2.4s_ease-in-out_infinite]" />
          </a>
        </div>
      </div>
    </section>
  )
}
