import portrait from '../assets/marcos-barbosa.webp'
import { about, broker } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="relative bg-white py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Retrato */}
          <Reveal className="lg:col-span-5">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden h-32 w-32 border-l border-t border-gold/40 sm:block lg:-left-6 lg:-top-6"
              />
              <div className="relative overflow-hidden rounded-[2px] bg-cream">
                <img
                  src={portrait}
                  alt={`${broker.name}, ${broker.role.toLowerCase()} em ${broker.city}`}
                  width={864}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover object-top"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden h-32 w-32 border-b border-r border-gold/40 sm:block lg:-bottom-6 lg:-right-6"
              />
            </figure>
          </Reveal>

          {/* Texto */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={120 + index * 90}>
                  <p className="max-w-xl text-[0.98rem] leading-[1.75] text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420}>
              <div className="mt-10 flex items-center gap-5 border-t border-line pt-7">
                <span aria-hidden="true" className="h-10 w-px bg-gold" />
                <div>
                  <p className="font-display text-xl text-ink">{broker.name}</p>
                  <p className="mt-1 text-[0.8rem] tracking-wide text-muted">
                    {broker.role} · {broker.creci}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
