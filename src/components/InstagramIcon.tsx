interface InstagramIconProps {
  className?: string
}

/**
 * Glifo do Instagram.
 * Desenhado localmente porque o Lucide removeu os ícones de marca —
 * assim o traço acompanha o restante da interface.
 */
export function InstagramIcon({ className = 'h-5 w-5' }: InstagramIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
