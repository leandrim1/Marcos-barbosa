/**
 * ------------------------------------------------------------------
 *  DEPOIMENTOS
 * ------------------------------------------------------------------
 *  Nenhum depoimento foi escrito: a lista começa vazia de propósito.
 *  Enquanto estiver vazia, a seção exibe uma composição neutra, sem
 *  cards falsos. Para publicar, basta acrescentar objetos aqui — o
 *  layout dos cards já está pronto e aparece automaticamente.
 *
 *  Exemplo do formato esperado:
 *
 *  {
 *    id: 'nome-do-cliente',
 *    name: 'Nome do cliente',
 *    context: 'Comprou no bairro Jardim Europa',  // opcional
 *    quote: 'Depoimento exatamente como enviado pelo cliente.',
 *    rating: 5,                                   // opcional, 1 a 5
 *  }
 * ------------------------------------------------------------------
 */

export interface Testimonial {
  id: string
  name: string
  /** Contexto curto: o que a pessoa conquistou. Opcional. */
  context?: string
  quote: string
  /** Avaliação de 1 a 5 estrelas. Omitir quando não houver. */
  rating?: 1 | 2 | 3 | 4 | 5
}

export const testimonialList: Testimonial[] = []
