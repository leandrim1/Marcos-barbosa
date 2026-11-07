/**
 * ------------------------------------------------------------------
 *  BASE DE IMÓVEIS
 * ------------------------------------------------------------------
 *  Os dados abaixo foram transcritos dos materiais oficiais enviados
 *  por Marcos Barbosa (artes de divulgação do Instagram). Nenhuma
 *  informação foi criada ou estimada.
 *
 *  Esta é a ÚNICA fonte de dados de imóveis do site. Quando houver
 *  API (CODECA Build), basta trocar `properties` por um fetch que
 *  devolva o mesmo contrato `Property[]` — nenhum componente muda.
 * ------------------------------------------------------------------
 */

import apartamentoCidadeJardim from '../assets/imoveis/apartamento-cidade-jardim-290.webp'
import apartamentoFatima from '../assets/imoveis/apartamento-fatima-280.webp'
import apartamentoLaranjeiras from '../assets/imoveis/apartamento-laranjeiras-265.webp'
import apartamentoPanoramico from '../assets/imoveis/apartamento-panoramico-270.webp'
import casaAfonsoQueiroz440 from '../assets/imoveis/casa-afonso-queiroz-440.webp'
import casaAfonsoQueiroz750 from '../assets/imoveis/casa-afonso-queiroz-750.webp'
import casaAltoLimoeiro from '../assets/imoveis/casa-alto-limoeiro-600.webp'
import casaAurelioCaixeta from '../assets/imoveis/casa-aurelio-caixeta-790.webp'
import casaBarreiro from '../assets/imoveis/casa-barreiro-380.webp'
import casaJardimEuropa280 from '../assets/imoveis/casa-jardim-europa-280.webp'
import casaJardimEuropa300 from '../assets/imoveis/casa-jardim-europa-300.webp'
import casaSantaHelena from '../assets/imoveis/casa-santa-helena-315.webp'
import coberturaCentro from '../assets/imoveis/cobertura-centro-850.webp'

/** Categorias usadas pelos filtros da seção de imóveis. */
export type PropertyCategory = 'casa' | 'apartamento' | 'lote' | 'investimento'

/** Tipo do imóvel, como aparece no card. */
export type PropertyKind = 'Casa' | 'Apartamento' | 'Apartamento térreo' | 'Cobertura' | 'Lote'

export interface Property {
  /** Identificador estável (slug). */
  id: string
  /** Bairro — é a identificação pública do imóvel. */
  neighborhood: string
  city: string
  kind: PropertyKind
  categories: PropertyCategory[]
  /** Quartos no total (suítes incluídas). */
  bedrooms: number
  /** Quantas das suítes, quando informado. */
  suites?: number
  /** Banheiros completos: banheiro social + suítes. Lavabo entra em `highlights`. */
  bathrooms: number
  /** Vagas de garagem. */
  parking: number
  /** Área construída / interna, em m². */
  builtArea?: number
  /** Área do terreno, em m². */
  landArea?: number
  /** Área total, em m² (usado quando a arte informa "área total"). */
  totalArea?: number
  /** Preço de venda em reais. */
  price: number
  /** Valor do condomínio em reais, quando informado. */
  condoFee?: number
  /** Diferenciais, transcritos do material oficial. */
  highlights: string[]
  image: string
  imageAlt: string
}

export const properties: Property[] = [
  {
    id: 'cobertura-centro',
    neighborhood: 'Centro',
    city: 'Patos de Minas - MG',
    kind: 'Cobertura',
    categories: ['apartamento'],
    bedrooms: 4,
    suites: 2,
    bathrooms: 3,
    parking: 2,
    totalArea: 233.73,
    price: 850000,
    condoFee: 480,
    highlights: [
      'Vista panorâmica da cidade',
      'Ambientes amplos e bem distribuídos',
      '4 quartos, sendo 2 suítes, todos com armários planejados',
      'Sala de estar espaçosa e sacada integrada',
      'Cozinha ampla com armários planejados e bancada em granito',
      'Sala de TV, copa e lavabo',
      'Área de serviço separada e coberta',
      'Área externa perfeita para espaço gourmet, com ducha',
      'Aquecedor instalado',
      'Prédio com elevador',
      'Condomínio R$ 480 (água inclusa)',
    ],
    image: coberturaCentro,
    imageAlt: 'Sala de jantar da cobertura à venda no bairro Centro',
  },
  {
    id: 'casa-aurelio-caixeta',
    neighborhood: 'Aurélio Caixeta',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking: 2,
    landArea: 366,
    builtArea: 179.92,
    price: 790000,
    highlights: [
      '3 quartos amplos, sendo 1 suíte com closet',
      'Sala de TV, sala de estar e sala de jantar',
      'Cozinha com bancada em granito, gás canalizado e armários planejados',
      'Copa e despensa',
      'Banheiro social com box, espelho e planejados',
      'Varanda gourmet ampla',
      'Área de serviço separada',
      'Quarto nos fundos',
      'Portão eletrônico, interfone e cerca elétrica',
    ],
    image: casaAurelioCaixeta,
    imageAlt: 'Sala de jantar da casa à venda no bairro Aurélio Caixeta',
  },
  {
    id: 'casa-afonso-queiroz-750',
    neighborhood: 'Afonso Queiroz',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking: 3,
    landArea: 253,
    builtArea: 201,
    price: 750000,
    highlights: [
      '3 quartos, sendo 1 suíte com ar-condicionado',
      'Ampla sala de TV com pé-direito alto',
      'Copa com jardim de inverno',
      'Cozinha com bancadas em nanoglass branco e armários planejados',
      'Área verde integrada à área gourmet',
      'Espaçosa área gourmet com lavabo',
      'Lavanderia independente',
      'Banheiro social com box, espelho e armário planejado',
      'Energia solar produzindo cerca de 600 kWh/mês',
      'Pele de vidro na sala e esquadrias de alumínio',
      'Garagem para até 3 carros grandes',
      'Cômodo lateral versátil, ideal para comércio, garagem ou depósito',
    ],
    image: casaAfonsoQueiroz750,
    imageAlt: 'Cozinha e copa da casa à venda no bairro Afonso Queiroz',
  },
  {
    id: 'casa-alto-limoeiro',
    neighborhood: 'Alto Limoeiro',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking: 4,
    landArea: 306,
    builtArea: 135,
    price: 600000,
    highlights: [
      '3 quartos, sendo uma suíte',
      'Sala de TV e sala de jantar',
      'Escritório',
      'Cozinha',
      'Banheiro social',
      'Área de serviço',
      '4 vagas de garagem',
    ],
    image: casaAltoLimoeiro,
    imageAlt: 'Área interna da casa à venda no bairro Alto Limoeiro',
  },
  {
    id: 'casa-afonso-queiroz-440',
    neighborhood: 'Afonso Queiroz',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 2,
    landArea: 210,
    builtArea: 80.12,
    price: 440000,
    highlights: [
      '2 quartos, sendo 1 suíte',
      'Banheiro da suíte com nicho embutido, duas cubas e dois chuveiros',
      'Ambientes integrados e sala com pé-direito alto',
      'Cozinha com bancadas em granito',
      'Banheiro social com nicho embutido',
      'Área gourmet ampla com churrasqueira a carvão',
      'Lavanderia separada e jardim',
      'Passagem para aquecedor',
      'Fachada moderna, com janela da sala em pele de vidro',
      'Esquadrias de alumínio, gesso rebaixado e iluminação em LED',
    ],
    image: casaAfonsoQueiroz440,
    imageAlt: 'Sala integrada da casa à venda no bairro Afonso Queiroz',
  },
  {
    id: 'casa-barreiro',
    neighborhood: 'Barreiro',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 3,
    bathrooms: 1,
    parking: 2,
    landArea: 150,
    builtArea: 76,
    price: 380000,
    highlights: [
      '3 quartos',
      'Sala com pé-direito alto',
      'Cozinha com bancadas em granito e ilha',
      'Banheiro social com box e espelho',
      'Área gourmet',
      'Ambientes integrados',
      'Área de serviço',
      'Rebaixamento em gesso e iluminação em LED',
    ],
    image: casaBarreiro,
    imageAlt: 'Cozinha com ilha da casa à venda no bairro Barreiro',
  },
  {
    id: 'casa-santa-helena',
    neighborhood: 'Santa Helena',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 2,
    bathrooms: 1,
    parking: 4,
    landArea: 220,
    builtArea: 70,
    price: 315000,
    highlights: [
      '2 quartos',
      'Sala',
      'Cozinha com bancadas em granito',
      'Banheiro social',
      'Área de serviço',
      'Rebaixamento em gesso e iluminação em LED',
      '4 vagas de garagem',
      'Espaço para ampliação do 3º quarto',
    ],
    image: casaSantaHelena,
    imageAlt: 'Sala da casa à venda no bairro Santa Helena',
  },
  {
    id: 'casa-jardim-europa-300',
    neighborhood: 'Jardim Europa',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 3,
    bathrooms: 1,
    // NOTA: a arte original desta casa traz duas linhas conflitantes
    // ("2 vagas de garagem." e "4 vagas de garagem."). Mantido o menor
    // valor informado — confirmar com o Marcos e ajustar aqui.
    parking: 2,
    landArea: 220,
    builtArea: 69,
    price: 300000,
    highlights: [
      '3 quartos',
      'Sala',
      'Cozinha com bancadas em granito e armários planejados',
      'Banheiro social',
      'Área de serviço',
      'Iluminação em LED',
      'Portão eletrônico e interfone',
    ],
    image: casaJardimEuropa300,
    imageAlt: 'Cozinha da casa à venda no bairro Jardim Europa',
  },
  {
    id: 'apartamento-cidade-jardim',
    neighborhood: 'Cidade Jardim',
    city: 'Patos de Minas - MG',
    kind: 'Apartamento',
    categories: ['apartamento'],
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 1,
    builtArea: 64,
    price: 290000,
    highlights: [
      '2 quartos, sendo uma suíte',
      'Sala de TV e copa',
      'Cozinha',
      'Banheiro social',
      'Área de serviço',
      'Disponível apartamento 301',
      'Prédio com 4 andares, portão eletrônico e interfone',
    ],
    image: apartamentoCidadeJardim,
    imageAlt: 'Sala do apartamento à venda no bairro Cidade Jardim',
  },
  {
    id: 'apartamento-fatima',
    neighborhood: 'Nossa Senhora de Fátima',
    city: 'Patos de Minas - MG',
    kind: 'Apartamento térreo',
    categories: ['apartamento'],
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 2,
    totalArea: 137,
    builtArea: 51.43,
    price: 280000,
    condoFee: 100,
    highlights: [
      '2 quartos, sendo 1 suíte com closet',
      'Sala e copa',
      'Cozinha com armário',
      'Banheiro social com box, espelho e armário planejados',
      'Aquecedor solar',
      'Lavanderia separada',
      'Rebaixamento em gesso e iluminação em LED',
      'Entrada individual, portão eletrônico e interfone',
      '2 vagas de garagem coberta',
      'Condomínio R$ 100',
    ],
    image: apartamentoFatima,
    imageAlt: 'Sala do apartamento térreo à venda no bairro Nossa Senhora de Fátima',
  },
  {
    id: 'casa-jardim-europa-280',
    neighborhood: 'Jardim Europa',
    city: 'Patos de Minas - MG',
    kind: 'Casa',
    categories: ['casa'],
    bedrooms: 2,
    bathrooms: 1,
    parking: 2,
    landArea: 110,
    builtArea: 69.52,
    price: 280000,
    highlights: [
      '2 quartos',
      'Sala',
      'Cozinha com bancadas em granito',
      'Banheiro social com box e espelho',
      'Lavabo',
      'Área de serviço',
      'Iluminação em LED',
    ],
    image: casaJardimEuropa280,
    imageAlt: 'Cozinha da casa à venda no bairro Jardim Europa',
  },
  {
    id: 'apartamento-panoramico',
    neighborhood: 'Panorâmico',
    city: 'Patos de Minas - MG',
    kind: 'Apartamento',
    categories: ['apartamento'],
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    builtArea: 68,
    price: 270000,
    condoFee: 50,
    highlights: [
      '3 quartos',
      'Sala de TV',
      'Cozinha com planejados',
      'Banheiro social com box, espelho e planejados',
      'Lavanderia separada',
      '2º andar disponível, apenas 1 lance de escada',
      'Prédio com 5 apartamentos, 2 por andar',
      'Água e energia individuais',
      'Portão eletrônico e interfone',
      'Condomínio R$ 50',
    ],
    image: apartamentoPanoramico,
    imageAlt: 'Cozinha do apartamento à venda no bairro Panorâmico',
  },
  {
    id: 'apartamento-laranjeiras',
    neighborhood: 'Laranjeiras',
    city: 'Patos de Minas - MG',
    kind: 'Apartamento',
    categories: ['apartamento'],
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 1,
    builtArea: 63,
    price: 265000,
    highlights: [
      '2 quartos, sendo uma suíte',
      'Ambientes integrados',
      'Sala com sacada',
      'Cozinha com planejados e bancadas em granito',
      'Banheiro social com box, espelho e planejado',
      'Área de serviço separada',
      'Prédio com 3 andares e apenas 7 apartamentos',
    ],
    image: apartamentoLaranjeiras,
    imageAlt: 'Cozinha do apartamento à venda no bairro Laranjeiras',
  },
]

/**
 * Filtros da galeria.
 *
 * `lote` e `investimento` ainda não possuem imóveis publicados: assim que
 * o Marcos enviar os dados, basta acrescentar a categoria no array
 * `categories` do imóvel (ou cadastrar um novo item acima) que o filtro
 * passa a listar automaticamente.
 */
export const propertyFilters: { id: PropertyCategory | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'casa', label: 'Casas' },
  { id: 'apartamento', label: 'Apartamentos' },
  { id: 'lote', label: 'Lotes' },
  { id: 'investimento', label: 'Imóveis para investimento' },
]

export function filterProperties(
  list: Property[],
  filter: PropertyCategory | 'todos',
): Property[] {
  if (filter === 'todos') return list
  return list.filter((property) => property.categories.includes(filter))
}
