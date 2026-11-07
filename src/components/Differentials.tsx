import { MapPinned, Route, ShieldCheck, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { differentials } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons: Record<string, LucideIcon> = {
  UserRound,
  ShieldCheck,
  Route,
  MapPinned,
}

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Uma conquista importante merece acompanhamento de verdade."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
          {differentials.map((item, index) => {
            const Icon = icons[item.icon] ?? UserRound

            return (
              <Reveal key={item.number} delay={index * 110}>
                <div className="group relative h-full border-t border-line pt-7 transition-colors duration-500 hover:border-gold">
                  <div className="flex items-start justify-between gap-4">
                    <Icon
                      className="h-6 w-6 text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                    <span className="font-display text-[0.95rem] tracking-wide text-gold/45">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[1.3rem] leading-snug text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
