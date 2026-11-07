/**
 * ------------------------------------------------------------------
 *  CONTEÚDO INSTITUCIONAL
 * ------------------------------------------------------------------
 *  Todo o texto do site vive aqui, separado da apresentação visual.
 *  Trocar uma palavra não exige abrir nenhum componente.
 * ------------------------------------------------------------------
 */

export const broker = {
  name: 'Marcos Barbosa',
  role: 'Corretor de Imóveis',
  creci: 'CRECI MG-53484',
  city: 'Patos de Minas - MG',
  since: 'Empresa cadastrada desde agosto de 2024.',
} as const

export const navigation = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'imoveis', label: 'Imóveis', href: '#imoveis' },
  { id: 'diferenciais', label: 'Diferenciais', href: '#diferenciais' },
  { id: 'contato', label: 'Contato', href: '#contato' },
] as const

export const hero = {
  eyebrow: 'Corretor de Imóveis | Patos de Minas - MG',
  titleLead: 'Seu',
  titleAccent: 'próximo capítulo',
  titleTail: 'começa com o imóvel certo.',
  description:
    'Encontre seu primeiro imóvel ou faça um excelente investimento com quem acompanha você em cada etapa da negociação.',
  facts: [
    'Especialista em imóveis em Patos de Minas',
    'Imóveis a partir de R$ 210 mil',
    'CRECI MG-53484',
  ],
  primaryCta: 'Encontrar meu imóvel',
  secondaryCta: 'Falar com Marcos',
} as const

export const about = {
  eyebrow: 'Sobre mim',
  title: 'Mais do que encontrar imóveis, ajudar você a conquistar objetivos.',
  paragraphs: [
    'Sou Marcos Barbosa, corretor de imóveis especializado em ajudar pessoas a conquistarem seu primeiro imóvel e realizarem bons negócios.',
    'Meu trabalho é baseado em segurança, transparência e acompanhamento próximo, desde o primeiro contato até a entrega das chaves.',
    'Acredito que comprar um imóvel é uma das decisões mais importantes da vida. Por isso, cada cliente merece atenção, orientação e um atendimento verdadeiramente personalizado.',
  ],
} as const

export const propertiesSection = {
  eyebrow: 'Encontre seu novo lar',
  title: 'Encontre o imóvel ideal para você.',
  description:
    'Conheça oportunidades selecionadas para morar, investir e conquistar seu espaço.',
} as const

export const differentials = [
  {
    number: '01',
    icon: 'UserRound',
    title: 'Atendimento personalizado',
    description:
      'Cada cliente possui objetivos diferentes. O atendimento é pensado para entender suas necessidades.',
  },
  {
    number: '02',
    icon: 'ShieldCheck',
    title: 'Segurança na negociação',
    description:
      'Orientação e transparência para que você tome decisões com mais tranquilidade.',
  },
  {
    number: '03',
    icon: 'Route',
    title: 'Acompanhamento completo',
    description:
      'Suporte durante todas as etapas, desde a escolha do imóvel até a entrega das chaves.',
  },
  {
    number: '04',
    icon: 'MapPinned',
    title: 'Conhecimento do mercado local',
    description:
      'Atuação focada no mercado imobiliário de Patos de Minas e região.',
  },
] as const

export const featured = {
  eyebrow: 'Saia do aluguel',
  title: 'Chegou a hora de conquistar o que é seu.',
  description:
    'Existem oportunidades para quem deseja deixar o aluguel para trás e começar uma nova história. Vamos encontrar um imóvel que combine com seus planos.',
  highlight: 'Imóveis a partir de R$ 210 mil.',
  cta: 'Quero conquistar meu imóvel',
} as const

export const testimonials = {
  eyebrow: 'Confiança',
  title: 'A confiança de quem já realizou esse sonho.',
  description:
    'Os depoimentos dos clientes atendidos por Marcos Barbosa serão publicados aqui, com nome e avaliação reais — nada é escrito em nome de quem confiou no trabalho.',
  cta: 'Já fui atendido pelo Marcos',
} as const

export const contactSection = {
  eyebrow: 'Vamos conversar',
  title: 'Seu novo imóvel pode estar mais perto do que você imagina.',
  description:
    'Vamos conversar sobre seus planos e encontrar uma oportunidade que faça sentido para você.',
  primaryCta: 'Agendar uma conversa',
  secondaryCta: 'Conhecer meu Instagram',
} as const

export const whatsappMessages = {
  general: 'Olá, Marcos! Vim pelo seu site e gostaria de conversar sobre imóveis em Patos de Minas.',
  findProperty:
    'Olá, Marcos! Vim pelo seu site e gostaria de ajuda para encontrar o imóvel ideal para mim.',
  leaveRent:
    'Olá, Marcos! Vim pelo seu site e quero sair do aluguel. Pode me mostrar as oportunidades disponíveis?',
  schedule:
    'Olá, Marcos! Vim pelo seu site e gostaria de agendar uma conversa sobre meus planos de comprar um imóvel.',
  testimonial:
    'Olá, Marcos! Fui atendido por você e gostaria de deixar meu depoimento para o site.',
} as const

/** Artigo definido correto para cada tipo de imóvel. */
const kindArticle: Record<string, string> = {
  Casa: 'na',
  Cobertura: 'na',
  Apartamento: 'no',
  'Apartamento térreo': 'no',
  Lote: 'no',
}

/** Mensagem de interesse em um imóvel específico. */
export function propertyInterestMessage(input: {
  kind: string
  neighborhood: string
  price: string
}): string {
  const article = kindArticle[input.kind] ?? 'no'
  return `Olá, Marcos! Vim pelo seu site e tenho interesse ${article} ${input.kind.toLowerCase()} no bairro ${input.neighborhood} (${input.price}). Pode me passar mais informações?`
}
