import type { ElementType, ReactNode } from 'react'

import { useInViewAnimation } from '../hooks/useInViewAnimation'

interface RevealProps {
  children: ReactNode
  /** Atraso em ms, para entrada escalonada de uma lista. */
  delay?: number
  /** `true` remove o deslocamento vertical e faz só o fade. */
  fade?: boolean
  className?: string
  as?: ElementType
}

/**
 * Envolve qualquer conteúdo com a animação de entrada (fade-in-up).
 * Respeita `prefers-reduced-motion` através do hook.
 */
export function Reveal({
  children,
  delay = 0,
  fade = false,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-visible={isVisible}
      className={`reveal ${fade ? 'reveal-fade' : ''} ${className}`.trim()}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
