import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { navigation } from '../data/site'
import { whatsappMessages } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { externalLinkProps, whatsappUrl } from '../lib/contact'
import { Logo } from './Logo'
import { WhatsAppIcon } from './WhatsAppIcon'

const sectionIds = navigation.map((item) => item.id)

export function Header() {
  const scrolled = useScrolled(32)
  const activeSection = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  // Trava o scroll do body enquanto o menu mobile estiver aberto.
  useEffect(() => {
    if (!menuOpen) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || menuOpen
          ? 'bg-white/92 shadow-[0_1px_0_rgba(32,37,33,0.07)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="shell">
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? 'h-[4.75rem]' : 'h-[5.5rem] md:h-28'
          }`}
        >
          <a
            href="#inicio"
            aria-label="Marcos Barbosa — ir para o início"
            className="shrink-0 transition-opacity duration-300 hover:opacity-80"
          >
            <Logo height={scrolled ? 50 : 62} className="transition-all duration-500" />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="group relative inline-block py-1 text-[0.82rem] font-medium tracking-wide text-ink/75 transition-colors duration-300 hover:text-ink"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl(whatsappMessages.general)}
              {...externalLinkProps}
              className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-white transition-all duration-300 hover:bg-forest-soft hover:shadow-[0_8px_24px_-10px_rgba(23,59,50,0.8)] sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com Marcos
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-cream lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação principal (mobile)" className="shell py-6">
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li key={item.id} className={index > 0 ? 'border-t border-line/70' : ''}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 font-display text-xl text-ink transition-colors duration-300 hover:text-gold-deep"
                >
                  {item.label}
                  <span className="eyebrow text-gold/60">{`0${index + 1}`}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={whatsappUrl(whatsappMessages.general)}
            {...externalLinkProps}
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-forest-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com Marcos
          </a>
        </nav>
      </div>
    </header>
  )
}
