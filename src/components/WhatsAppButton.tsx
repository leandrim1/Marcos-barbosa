import { useEffect, useState } from 'react'

import { whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { WhatsAppIcon } from './WhatsAppIcon'

const TOOLTIP = 'Fale diretamente com Marcos'

/**
 * Botão flutuante de WhatsApp — fixo no canto inferior direito,
 * acessível durante toda a navegação.
 */
export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)

  // Pequeno atraso para a animação de entrada acontecer depois do primeiro paint.
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed right-4 z-50 transition-opacity duration-500 sm:right-6 ${
        mounted ? 'opacity-100' : 'pointer-events-none opacity-0'
      } bottom-[calc(5.25rem+env(safe-area-inset-bottom))] md:bottom-6`}
    >
      <a
        href={whatsappUrl(whatsappMessages.general)}
        {...externalLinkProps}
        aria-label={TOOLTIP}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.85)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95"
        style={
          mounted
            ? { animation: 'mb-float-in 0.7s cubic-bezier(0.22,1,0.36,1) both' }
            : undefined
        }
      >
        {/* Anel pulsante discreto */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] [animation:mb-pulse-ring_3.2s_cubic-bezier(0.22,1,0.36,1)_infinite] motion-reduce:hidden"
        />

        <WhatsAppIcon className="relative h-7 w-7" />

        {/* Tooltip (desktop) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap rounded-full bg-forest px-4 py-2.5 text-[0.78rem] font-medium text-white opacity-0 shadow-[0_12px_30px_-14px_rgba(23,59,50,0.9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100 md:block md:translate-x-2"
        >
          {TOOLTIP}
          <span
            aria-hidden="true"
            className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-forest"
          />
        </span>
      </a>
    </div>
  )
}
