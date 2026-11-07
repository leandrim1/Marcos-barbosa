const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const decimal = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
})

/** R$ 440.000 */
export function formatPrice(value: number): string {
  // Intl usa espaço não separável entre "R$" e o número; trocamos por um
  // espaço comum para que o texto pré-preenchido do WhatsApp saia limpo.
  return brl.format(value).replace(/\u00a0/g, ' ')
}

/** 80,12 m² */
export function formatArea(value: number): string {
  return `${decimal.format(value)} m²`
}
