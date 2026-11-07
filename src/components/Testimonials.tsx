import { ArrowUpRight, Quote, Star } from 'lucide-react'

import { testimonialList } from '../data/testimonials'
import { broker, testimonials, whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  const hasTestimonials = testimonialList.length > 0

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          align="center"
        />

        {hasTestimonials ? (
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {testimonialList.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 100} className="h-full">
                <figure className="flex h-full flex-col border border-line bg-white p-8 transition-colors duration-500 hover:border-gold/35">
                  <Quote
                    className="h-6 w-6 shrink-0 text-gold/60"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />

                  {testimonial.rating ? (
                    <div
                      className="mt-5 flex gap-1"
                      aria-label={`Avaliação ${testimonial.rating} de 5`}
                    >
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <Star
                          key={starIndex}
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 ${
                            starIndex < (testimonial.rating ?? 0)
                              ? 'fill-gold text-gold'
                              : 'text-line'
                          }`}
                        />
                      ))}
                    </div>
                  ) : null}

                  <blockquote className="mt-5 flex-1 text-[0.95rem] leading-[1.8] text-ink/80">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-7 border-t border-line pt-5">
                    <p className="font-display text-lg text-ink">{testimonial.name}</p>
                    {testimonial.context ? (
                      <p className="mt-1 text-[0.78rem] tracking-wide text-muted">
                        {testimonial.context}
                      </p>
                    ) : null}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Composição neutra — nenhum depoimento inventado. */
          <Reveal delay={150}>
            <div className="relative mx-auto mt-14 max-w-3xl lg:mt-20">
              <div className="relative overflow-hidden bg-cream px-8 py-14 text-center sm:px-16 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gold"
                />

                <Quote
                  className="mx-auto h-8 w-8 text-gold/50"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <p className="mx-auto mt-8 max-w-xl text-pretty font-display text-[1.35rem] leading-[1.5] text-ink sm:text-[1.6rem]">
                  {testimonials.description}
                </p>

                <div
                  aria-hidden="true"
                  className="mx-auto mt-10 flex items-center justify-center gap-3"
                >
                  <span className="h-px w-10 bg-line" />
                  <span className="h-1 w-1 rotate-45 bg-gold/60" />
                  <span className="h-px w-10 bg-line" />
                </div>

                <p className="mt-8 text-[0.8rem] tracking-wide text-muted">
                  {broker.name} · {broker.creci}
                </p>

                <a
                  href={whatsappUrl(whatsappMessages.testimonial)}
                  {...externalLinkProps}
                  className="group mt-9 inline-flex items-center gap-2 text-[0.84rem] font-medium tracking-wide text-forest transition-colors duration-300 hover:text-gold-deep"
                >
                  {testimonials.cta}
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
