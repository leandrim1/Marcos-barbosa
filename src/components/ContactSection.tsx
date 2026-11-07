import { ArrowUpRight } from 'lucide-react'

import { broker, contactSection, whatsappMessages } from '../data/site'
import { INSTAGRAM_URL, externalLinkProps, whatsappUrl } from '../lib/contact'
import { InstagramIcon } from './InstagramIcon'
import { Reveal } from './Reveal'

export function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-forest">
      {/* Textura dourada muito sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="shell relative">
        <div className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-gold-light">
                  <span aria-hidden="true" className="h-px w-9 bg-current opacity-60" />
                  {contactSection.eyebrow}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-6 text-balance text-[2.1rem] leading-[1.12] text-white sm:text-[2.9rem] lg:text-[3.3rem]">
                  {contactSection.title}
                </h2>
              </Reveal>

              <Reveal delay={190}>
                <p className="mt-7 max-w-lg text-[1rem] leading-[1.8] text-white/70">
                  {contactSection.description}
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappUrl(whatsappMessages.schedule)}
                    {...externalLinkProps}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-light px-7 py-4 text-[0.85rem] font-medium tracking-wide text-forest transition-all duration-400 hover:bg-gold-pale hover:shadow-[0_18px_40px_-18px_rgba(210,181,116,0.85)]"
                  >
                    {contactSection.primaryCta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    {...externalLinkProps}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-4 text-[0.85rem] font-medium tracking-wide text-white transition-all duration-400 hover:border-gold-light hover:text-gold-light"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {contactSection.secondaryCta}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Assinatura */}
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <Reveal delay={360}>
                <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="font-display text-[1.75rem] leading-tight text-white">
                    {broker.name}
                  </p>
                  <p className="mt-2 text-[0.85rem] tracking-wide text-gold-light">
                    {broker.role}
                  </p>
                  <p className="mt-1 text-[0.8rem] tracking-wide text-white/50">{broker.creci}</p>
                  <p className="mt-6 text-[0.8rem] tracking-wide text-white/50">{broker.city}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
