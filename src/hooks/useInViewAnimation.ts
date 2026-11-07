import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Fração do elemento visível antes de disparar. */
  threshold?: number
  /** Margem aplicada à viewport do observer. */
  rootMargin?: string
  /** Quando `false`, a animação volta a rodar a cada entrada. */
  once?: boolean
}

/**
 * Observa um elemento e devolve `true` assim que ele entra na viewport.
 *
 * Usa IntersectionObserver (zero custo de scroll listener) e respeita
 * `prefers-reduced-motion`: com movimento reduzido o elemento já nasce
 * visível e o observer nem chega a ser criado.
 */
export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
