# RAIA 01 Fit Store - Documentacao do Projeto

## Visao Geral

**Nome:** RAIA 01 Fitness Store
**Plataforma:** Shopify (Online Store 2.0)
**Tema Base:** Rise Theme v15.4.0
**Localizacao:** Campo Verde, Mato Grosso, Brasil
**Nicho:** Moda Fitness Feminina
**Slogan:** "Vista seu Esporte"

---

## Identidade Visual

### Paleta de Cores
```css
--raia-purple: #7B3F9D      /* Roxo principal */
--raia-pink: #E91E63        /* Rosa secundario */
--raia-yellow: #FFC107      /* Amarelo destaque */
--raia-orange: #FF6B35      /* Laranja accent */
--raia-light-purple: #9C51B6 /* Roxo claro */
--color-bg: #FFFFFF         /* Fundo branco */
--color-text: #333333       /* Texto principal */
--color-text-light: #666666 /* Texto secundario */
```

### Tipografia
- **Fonte Principal:** Murecho (configurada no tema)
- **Fonte CSS:** Poppins, Montserrat (fallback)
- **Peso Titulos:** 600-700
- **Peso Corpo:** 400-500

### Estilo Visual
- Gradientes roxo/rosa em botoes e CTAs
- Bordas arredondadas (border-radius: 50px para botoes, 15-20px para cards)
- Sombras suaves com tom roxo (rgba(123, 63, 157, 0.2-0.3))
- Animacoes de hover com translateY e scale
- Transicoes suaves (0.3s ease)

---

## Estrutura da Home Atual

### 1. Header (Padrao Rise Theme)
- Logo RAIA 01 (90px width)
- Menu de navegacao
- Icones: busca, conta, carrinho
- Estilo: fundo branco, sombra sutil

### 2. Hero Banner (Slideshow)
- **Tipo:** `slideshow` do Rise Theme
- **Layout:** Full bleed
- **Altura:** Adapta a imagem
- **Rotacao automatica:** 5 segundos
- **Slides atuais:**
  - Vista seu Esporte.png
  - Banner_1_1.png
  - Vista seu Esporte_1.png
- **Indicadores:** Dots

### 3. Lista de Colecoes (Categorias)
- **Tipo:** `collection-list` do Rise Theme
- **Colecoes:** Tops, Leggings, Shorts, Croppeds, Camisetas, Novidades
- **Layout:** 6 colunas desktop, 1 mobile (swipe)
- **Ratio imagem:** Adaptavel
- **Estilo visual:** Cards roxos com hover

### 4. Produtos em Destaque (RAIA NEWS)
- **Tipo:** `featured-collection` do Rise Theme
- **Colecao:** novidades
- **Produtos exibidos:** 6
- **Colunas:** 5 desktop, 2 mobile
- **Slider desktop:** Ativo
- **Botao "Ver Todos":** Ativo

### 5. Newsletter
- **Secao customizada:** raia01-newsletter.liquid
- **Estilo:** Gradiente roxo/rosa
- **Titulo:** "Fique por Dentro!"

### 6. Footer (Padrao Rise Theme)
- Colunas: Institucional, Atendimento, Fale Conosco
- Redes sociais (Instagram: @raia1.fitstore)
- Formas de pagamento
- Copyright

---

## Arquivos Customizados RAIA01

### Sections (sections/)
| Arquivo | Descricao |
|---------|-----------|
| `raia01-hero-banner.liquid` | Banner hero com Swiper |
| `raia01-categories.liquid` | Grid de categorias |
| `raia01-about.liquid` | Pagina Sobre Nos |
| `raia01-newsletter.liquid` | Secao newsletter |
| `raia01-termos.liquid` | Termos de uso |
| `raia01-privacidade.liquid` | Politica de privacidade |
| `raia01-trocas.liquid` | Trocas e devolucoes |

### CSS (assets/)
| Arquivo | Descricao |
|---------|-----------|
| `raia01-custom.css` | CSS principal customizado |
| `custom-raia01.css` | CSS alternativo/adicional |

### JavaScript (assets/)
| Arquivo | Descricao |
|---------|-----------|
| `raia01-custom.js` | JS customizado (animacoes, Swiper, WhatsApp) |

---

## Templates de Pagina (templates/)

| Template | Uso |
|----------|-----|
| `index.json` | Home page |
| `page.sobre-nos.json` | Sobre nos |
| `page.termos-uso.json` | Termos de uso |
| `page.politica-privacidade.json` | Politica privacidade |
| `page.trocas-devolucoes.json` | Trocas/devolucoes |
| `page.contact.json` | Contato |

---

## Colecoes de Produtos

1. **tops** - Tops fitness
2. **leggings** - Calcas legging
3. **shorts** - Shorts
4. **croppeds** - Cropped tops
5. **camisetas** - Camisetas
6. **novidades** - Lancamentos/Novidades

---

## Tecnologias Utilizadas

- **Shopify Liquid** - Templating
- **HTML5/CSS3** - Estrutura e estilos
- **JavaScript Vanilla** - Interatividade
- **Swiper.js** - Carrosseis/sliders
- **CSS Custom Properties** - Variaveis de tema
- **Flexbox/Grid** - Layouts responsivos

---

## Padroes de Codigo

### CSS
- Usar variaveis CSS (--raia-*)
- Manter especificidade baixa quando possivel
- Usar !important apenas quando necessario para sobrescrever Rise
- Transicoes: `transition: all 0.3s ease`
- Bordas arredondadas: 50px (botoes), 15-20px (cards)

### Liquid
- Prefixo `raia01-` para arquivos customizados
- Schemas completos com settings editaveis
- Suporte a traducoes quando possivel

### JavaScript
- Vanilla JS (sem jQuery)
- Event delegation quando apropriado
- Animacoes com CSS quando possivel

---

## Integracoes

- **Instagram:** @raia1.fitstore
- **WhatsApp:** Botao flutuante (verde #25D366)

---

## Notas de Desenvolvimento

### Para adicionar nova secao:
1. Criar arquivo `sections/raia01-[nome].liquid`
2. Incluir schema com presets
3. Adicionar CSS em `assets/raia01-custom.css`
4. Se necessario, adicionar JS em `assets/raia01-custom.js`

### Para editar home:
1. Modificar `templates/index.json` para ordem/configuracao de secoes
2. Ou usar editor Shopify (Customize theme)

### Classes CSS importantes:
- `.raia-*` - Classes customizadas RAIA
- `.card`, `.card-wrapper` - Cards de produto Rise
- `.button`, `.btn-*` - Botoes
- `.section-*` - Wrappers de secao
- `.header__*` - Elementos do header Rise
- `.footer__*` - Elementos do footer Rise

---

## Contato & Recursos

- **Documentacao Shopify:** https://shopify.dev/docs/themes
- **Rise Theme Docs:** Documentacao padrao Shopify
- **Swiper.js:** https://swiperjs.com/

---

*Ultima atualizacao: Novembro 2024*
