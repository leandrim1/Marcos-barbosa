import { MapPin } from 'lucide-react'

import { broker, navigation } from '../data/site'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  externalLinkProps,
} from '../lib/contact'
import { InstagramIcon } from './InstagramIcon'
import { Logo } from './Logo'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="shell">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Marca */}
          <div className="lg:col-span-5">
            <Logo height={104} />

            <p className="mt-7 max-w-xs text-[0.88rem] leading-relaxed text-muted">
              {broker.name} | {broker.role}
            </p>

            <p className="mt-4 flex items-center gap-2 text-[0.84rem] text-muted">
              <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden="true" />
              {broker.city}
            </p>

            <p className="mt-2 text-[0.84rem] tracking-wide text-muted">{broker.creci}</p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="lg:col-span-3">
            <p className="eyebrow text-ink">Navegação</p>
            <ul className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[0.88rem] text-muted transition-colors duration-300 hover:text-gold-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink">Contato</p>

            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  {...externalLinkProps}
                  className="group inline-flex items-center gap-2.5 text-[0.88rem] text-muted transition-colors duration-300 hover:text-gold-deep"
                >
                  <WhatsAppIcon className="h-4 w-4 text-gold" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  {...externalLinkProps}
                  className="group inline-flex items-center gap-2.5 text-[0.88rem] text-muted transition-colors duration-300 hover:text-gold-deep"
                >
                  <InstagramIcon className="h-4 w-4 text-gold" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>

            <p className="mt-8 max-w-xs text-[0.8rem] leading-relaxed text-muted/80">
              {broker.since}
            </p>
          </div>
        </div>

        {/* Base */}
        <div className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.76rem] tracking-wide text-muted/80">
            © {year} {broker.name}. Todos os direitos reservados.
          </p>
          <p className="text-[0.76rem] tracking-wide text-muted/80">
            {broker.creci} · {broker.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
