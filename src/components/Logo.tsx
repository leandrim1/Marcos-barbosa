import logo from '../assets/brand/logo-marcos-barbosa.webp'
import { broker } from '../data/site'

interface LogoProps {
  /** Altura renderizada em pixels. A proporção original é preservada. */
  height?: number
  className?: string
}

/**
 * Logotipo oficial de Marcos Barbosa.
 * Imagem original em PNG com fundo transparente — cores e proporções
 * exatamente como fornecidas, sem recorte ou recoloração.
 */
export function Logo({ height = 56, className = '' }: LogoProps) {
  return (
    <img
      src={logo}
      alt={`${broker.name} — ${broker.role}`}
      width={Math.round((height * 493) / 502)}
      height={height}
      style={{ height }}
      className={`w-auto select-none ${className}`.trim()}
      draggable={false}
    />
  )
}
