/**
 * Canais oficiais de contato.
 * Centralizados aqui para que uma futura integração (ex.: CODECA Build)
 * precise alterar um único arquivo.
 */

export const WHATSAPP_PHONE = '5534991948915'

/** Link oficial, exatamente como informado pelo cliente (sem mensagem). */
export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5534991948915&text&type=phone_number&app_absent=0'

export const INSTAGRAM_URL = 'https://www.instagram.com/marcosbarbosa.imoveis'

export const INSTAGRAM_HANDLE = '@marcosbarbosa.imoveis'

/** Telefone formatado para exibição. */
export const PHONE_DISPLAY = '(34) 99194-8915'

/**
 * Monta um link de WhatsApp com mensagem pré-preenchida.
 * Sem mensagem, devolve o link oficial.
 */
export function whatsappUrl(message?: string): string {
  if (!message) return WHATSAPP_URL

  const text = encodeURIComponent(message)
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${text}&type=phone_number&app_absent=0`
}

/** Atributos padrão para links externos. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const
