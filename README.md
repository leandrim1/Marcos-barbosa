# Marcos Barbosa — Corretor de Imóveis

Site institucional de **Marcos Barbosa**, corretor de imóveis em Patos de Minas - MG
(CRECI MG-53484).

Esta etapa é **100% front-end**: sem backend, banco de dados, autenticação,
painel administrativo ou qualquer integração externa.

---

## Stack

| | |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4 (tokens em `src/index.css`) |
| Ícones | Lucide React |
| Tipografia | Playfair Display (títulos) + Inter (interface) |

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # serve a build de produção
```

## Estrutura

```
src/
  assets/
    brand/        logotipo oficial (webp/png com fundo transparente)
    imoveis/      fotografias dos imóveis
    marcos-barbosa.webp
  components/     um arquivo por seção, todos independentes
  data/
    site.ts           textos institucionais
    properties.ts     base de imóveis (fonte única)
    testimonials.ts   depoimentos (vazio até o cliente enviar)
  hooks/
    useInViewAnimation.ts   animação de entrada via IntersectionObserver
    useScrolled.ts          estado do header ao rolar
    useActiveSection.ts     item ativo da navegação
  lib/
    contact.ts      WhatsApp e Instagram
    format.ts       moeda e metragem (pt-BR)
```

## Onde editar o conteúdo

Nenhum texto fica dentro dos componentes.

| O que mudar | Arquivo |
| --- | --- |
| Títulos, parágrafos, diferenciais, CTAs | `src/data/site.ts` |
| Imóveis (preço, bairro, metragem, fotos) | `src/data/properties.ts` |
| Depoimentos | `src/data/testimonials.ts` |
| WhatsApp, Instagram, telefone | `src/lib/contact.ts` |

### Cadastrar um imóvel

1. Coloque a foto em `src/assets/imoveis/`.
2. Importe-a no topo de `src/data/properties.ts`.
3. Acrescente um objeto ao array `properties` seguindo a interface `Property`.

O card, o filtro, o contador e a mensagem de WhatsApp se atualizam sozinhos.

### Filtros com 0 imóveis

`Lotes` e `Imóveis para investimento` aparecem com contador `0` porque ainda não
há imóveis nessas categorias — ao clicar, o visitante vê um convite para
conversar, nunca uma lista vazia. Para popular, inclua `'lote'` ou
`'investimento'` no array `categories` do imóvel.

### Depoimentos

`testimonialList` começa vazio de propósito: nenhum depoimento foi escrito.
Enquanto estiver vazio, a seção mostra uma composição neutra. Ao adicionar o
primeiro objeto, os cards (com estrelas opcionais) aparecem automaticamente.

## Dados dos imóveis

Transcritos dos materiais oficiais enviados pelo cliente (artes de divulgação do
Instagram). Nada foi inventado ou estimado.

- `bathrooms` = banheiro social + suítes (lavabo fica em `highlights`).
- **Pendência:** a arte da casa do Jardim Europa (R$ 300.000) traz
  "2 vagas de garagem." e "4 vagas de garagem." na mesma lista. Ficou registrado
  o menor valor — confirmar com o Marcos e ajustar em `properties.ts`.

## Marca

O logotipo foi extraído do vídeo oficial enviado pelo cliente e exportado com
fundo transparente, **sem alterar cores, proporções ou composição**. Detalhes em
`src/assets/brand/README.md`. Se o arquivo vetorial original aparecer, basta
substituí-lo e apontar `src/components/Logo.tsx` para o novo caminho.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `gold` | `#B9954D` | Filetes, ícones, detalhes |
| `gold-light` | `#D2B574` | Botões e texto sobre fundo escuro |
| `gold-deep` | `#8A6E33` | Textos pequenos sobre fundo claro (contraste AA) |
| `forest` | `#173B32` | Seções escuras, botões primários |
| `forest-soft` | `#294B40` | Estados de hover |
| `cream` | `#F8F7F4` | Fundo secundário |
| `ink` | `#202521` | Texto principal |
| `muted` | `#777A75` | Texto secundário |

`gold-deep` é um tom mais profundo do dourado da marca, criado apenas para
textos pequenos sobre fundo claro — o `#B9954D` puro atinge 2,8:1 sobre branco,
abaixo do mínimo legível.

## Acessibilidade e performance

- Animações via `IntersectionObserver`, desligadas em `prefers-reduced-motion`.
- Navegação por teclado com foco visível e link "pular para os imóveis".
- Imagens em WebP, com `width`/`height` declarados (sem layout shift) e
  `loading="lazy"` fora da primeira dobra.
- Sem rolagem horizontal em 390px, 834px e 1440px.
- Todos os links externos abrem em nova aba com `rel="noopener noreferrer"`.

## Próxima etapa (integração)

A estrutura já está preparada para receber uma API (CODECA Build) sem refatoração:

- `properties` é a única fonte de dados — basta trocar o array por um `fetch`
  que devolva `Property[]`.
- Conteúdo e apresentação estão separados.
- Componentes são independentes e sem estado global.
- Nenhuma dependência do CODECA SDK foi adicionada nesta etapa.
