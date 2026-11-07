import { ArrowUpRight } from 'lucide-react'

import { whatsappMessages } from '../data/site'
import { externalLinkProps, whatsappUrl } from '../lib/contact'

/**
 * Barra flutuante inferior para dispositivos móveis.
 * Discreta, com uma única chamada para contato.
 */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-forest/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-3.5">
        <div className="min-w-0">
          <p className="truncate text-[0.82rem] font-medium text-white">
            Vamos encontrar seu imóvel?
          </p>
          <p className="mt-0.5 truncate text-[0.7rem] text-white/55">
            Atendimento direto com Marcos
          </p>
        </div>

        <a
          href={whatsappUrl(whatsappMessages.general)}
          {...externalLinkProps}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-light px-5 py-2.5 text-[0.78rem] font-medium text-forest transition-colors duration-300 active:bg-gold-pale"
        >
          Conversar
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
