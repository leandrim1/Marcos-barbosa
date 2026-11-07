import type { ReactNode } from 'react'

import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  /** Paleta do texto — claro sobre fundo verde, escuro sobre fundo claro. */
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light'
  const isCentered = align === 'center'

  return (
    <div
      className={`${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`.trim()}
    >
      <Reveal>
        <p
          className={`eyebrow flex items-center gap-3 ${isCentered ? 'justify-center' : ''} ${
            isLight ? 'text-gold-light' : 'text-gold-deep'
          }`}
        >
          <span aria-hidden="true" className="h-px w-9 bg-current opacity-60" />
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={90}>
        <h2
          className={`mt-5 text-pretty text-[1.85rem] leading-[1.15] sm:text-4xl lg:text-[2.9rem] ${
            isLight ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={170}>
          <p
            className={`mt-5 max-w-xl text-[0.98rem] leading-relaxed ${
              isCentered ? 'mx-auto' : ''
            } ${isLight ? 'text-white/70' : 'text-muted'}`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
