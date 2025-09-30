# 🎯 RAIA 01 FITNESS STORE - Guia de Instalação Shopify (Tema Rise)

## 📋 Arquivos Criados

Todos os códigos customizados foram criados e estão prontos para usar:

1. **custom-styles.css** - CSS completo com cores e estilos da marca
2. **home-banner.html** - Banner hero para página inicial
3. **categories-section.html** - Seção de categorias (Crossfit, Academia, Beach Tennis)
4. **custom-scripts.js** - JavaScript com animações e funcionalidades
5. **header-custom.html** - Header personalizado com menu
6. **footer-custom.html** - Footer com redes sociais e newsletter

---

## 🚀 Como Instalar na Shopify (Tema Rise)

### 1️⃣ Acessar o Editor de Tema

1. Entre no painel da Shopify (admin.shopify.com)
2. Vá em **Online Store** → **Themes**
3. No tema **Rise**, clique em **Customize** (para visualização) ou **Actions** → **Edit code** (para código)

---

### 2️⃣ Adicionar CSS Customizado

**Opção A: Via Editor de Código (Recomendado)**

1. Clique em **Actions** → **Edit code**
2. No menu lateral esquerdo, vá até **Assets**
3. Clique em **Add a new asset**
4. Escolha **Create a blank file**
5. Nomeie como: `custom-raia01.css`
6. Abra o arquivo **custom-styles.css** que criei na pasta
7. **Copie TODO o conteúdo** e cole no arquivo criado
8. Clique em **Save**
9. Agora vá em **Layout** → **theme.liquid**
10. Procure pela tag `</head>` (use Ctrl+F)
11. ANTES do `</head>`, adicione:
```liquid
{{ 'custom-raia01.css' | asset_url | stylesheet_tag }}
```
12. Clique em **Save**

**Opção B: Via Customizador (Mais simples, mas limitado)**

1. Vá em **Customize** (não Edit code)
2. Clique em **Theme settings** (ícone de pincel no canto inferior esquerdo)
3. Procure por **Custom CSS** ou **Additional CSS**
4. Cole o CSS lá
5. **Salvar**

---

### 3️⃣ Adicionar JavaScript Customizado

1. No editor de código (**Edit code**)
2. Vá em **Assets**
3. Clique em **Add a new asset**
4. Nomeie como: `custom-raia01.js`
5. Abra o arquivo **custom-scripts.js** que criei
6. **Copie TODO o conteúdo** e cole
7. **Save**
8. Agora vá em **Layout** → **theme.liquid**
9. Procure pela tag `</body>` (final do arquivo)
10. ANTES do `</body>`, adicione:
```liquid
<script src="{{ 'custom-raia01.js' | asset_url }}" defer></script>
```
11. **Save**

---

### 3.5️⃣ Adicionar Font Awesome (Ícones)

1. Ainda no **theme.liquid**
2. Procure pela tag `</head>`
3. ANTES do `</head>`, adicione:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```
4. **Save**

---

### 4️⃣ Upload da Logo

**Primeiro, faça upload das logos:**

1. Vá em **Settings** → **Files** (no painel da Shopify)
2. Clique em **Upload files**
3. Faça upload das duas imagens:
   - `1.png` (logo sem texto)
   - `2.png` (logo com nome completo)
4. Após upload, clique em cada imagem e **copie a URL**
5. Salve essas URLs em um bloco de notas, você vai usar

**OU adicione via Theme Settings:**

1. Vá em **Customize** → **Theme settings** → **Logo**
2. Faça upload da logo `2.png`
3. Ajuste o tamanho (recomendo 180px de largura)

---

### 5️⃣ Configurar Cores do Tema

**O tema Rise permite configurar cores facilmente:**

1. Vá em **Customize** → **Theme settings** → **Colors**
2. Configure conforme a paleta Raia 01:
   - **Primary/Accent color:** `#7B3F9D` (roxo)
   - **Secondary color:** `#E91E63` (rosa)
   - **Text color:** `#333333`
   - **Background:** `#FFFFFF`
3. **Save**

---

### 6️⃣ Configurar Menu de Navegação

1. No painel Shopify, vá em **Online Store** → **Navigation**
2. Clique em **Main menu**
3. Configure os itens:
   - **Todos os Produtos** → Link para `/collections/all`
   - **Crossfit** → Link para `/collections/crossfit`
   - **Academia** → Link para `/collections/academia`
   - **Beach Tennis** → Link para `/collections/beach-tennis`
   - **Lançamentos** → Link para `/collections/lancamentos`
   - **Sobre Nós** → Link para `/pages/sobre-nos`
4. **Save menu**

---

### 7️⃣ Adicionar Banner Hero na Home

**O tema Rise já tem slideshow integrado:**

1. Vá em **Customize** → **Home page**
2. Clique em **Add section**
3. Escolha **Image banner** ou **Slideshow**
4. Configure:
   - Faça upload de uma imagem 1920x800px
   - Título: "Vista-se para Vencer"
   - Texto: "Moda fitness de alta performance para mulheres que não param"
   - Botão 1: "Ver Coleção" → `/collections/all`
   - Botão 2: "Novidades" → `/collections/lancamentos`
5. Ajuste o alinhamento (centralizado) e cor do texto (branco)
6. **Save**

**Se quiser usar código customizado:**

1. Clique em **Add section** → **Custom Liquid**
2. Cole o código do arquivo **home-banner.html**
3. Substitua as URLs das imagens
4. **Save**

---

### 8️⃣ Adicionar Seção de Categorias

**Opção A: Usando as seções nativas do Rise**

1. Em **Customize** → **Home page**
2. Clique em **Add section**
3. Escolha **Collection list** (lista de coleções)
4. Selecione as coleções: Crossfit, Academia, Beach Tennis
5. Configure o layout (grid de 3 colunas)
6. **Save**

**Opção B: Usando código customizado**

1. Clique em **Add section** → **Custom Liquid**
2. Abra o arquivo **categories-section.html**
3. Copie o código desejado (escolha entre as 3 opções)
4. Cole na seção
5. **⚠️ Substitua as URLs:**
   - `IMAGEM_CROSSFIT.jpg` → Use imagens da sua galeria
   - Links: `/collections/crossfit` (ajuste conforme suas URLs)
6. **Save**

---

## 🎨 Configurar Footer e Redes Sociais

### 9️⃣ Footer (Rodapé)

**O tema Rise já tem footer configurável:**

1. Em **Customize**, desça até o final da página
2. Você verá a seção **Footer**
3. Configure:
   - **Newsletter:** Ative e customize o texto
   - **Menu links:** Adicione links institucionais
   - **Social media:** Adicione suas redes sociais
4. Para adicionar ícones e layout customizado:
   - Vá em **Edit code** → **Sections** → **footer.liquid**
   - Você pode substituir pelo código do **footer-custom.html**
   - Ou apenas adicionar suas redes sociais nas configurações do tema

### 🔟 Configurar Redes Sociais

1. Vá em **Customize** → **Theme settings** → **Social media**
2. Adicione suas URLs:
   - Instagram: `https://instagram.com/raia1.fitstore`
   - Facebook: (se tiver)
   - TikTok: (se tiver)
3. **Save**

### 1️⃣1️⃣ Configurar WhatsApp

Para adicionar botão flutuante do WhatsApp:

1. Vá em **Edit code**
2. Abra **Layout** → **theme.liquid**
3. Antes do `</body>`, adicione:
```liquid
<!-- WhatsApp Button -->
<a href="https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de saber mais."
   target="_blank"
   class="whatsapp-float"
   style="position: fixed; bottom: 30px; right: 30px; background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; box-shadow: 0 5px 20px rgba(37,211,102,0.4); z-index: 9999;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" width="30" height="30"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
</a>
```
4. **Substitua** `5511999999999` pelo número real (DDI+DDD+número)
5. **Save**

---

## 📸 Tamanhos de Imagem Recomendados

- **Logo:** 500x500px (PNG com fundo transparente)
- **Banner Hero:** 1920x800px ou 2400x1200px (JPG de alta qualidade)
- **Slideshow:** 1920x1080px (JPG)
- **Categorias (Collection list):** 800x800px (quadrado, JPG)
- **Produtos:** 1000x1250px (retrato, JPG de alta qualidade)
- **Mobile banner:** 800x1000px (retrato)

---

## 🎯 Criar Coleções (Collections)

**Antes de configurar o menu e categorias, crie as coleções:**

1. Vá em **Products** → **Collections**
2. Clique em **Create collection**
3. Crie as seguintes coleções:
   - **Nome:** Crossfit | **Handle:** `crossfit`
   - **Nome:** Academia | **Handle:** `academia`
   - **Nome:** Beach Tennis | **Handle:** `beach-tennis`
   - **Nome:** Lançamentos | **Handle:** `lancamentos`
4. Para cada coleção:
   - Adicione uma descrição
   - Faça upload de uma imagem de destaque (800x800px)
   - Configure se é manual ou automática (por tags)
5. **Save**

**Adicionar produtos às coleções:**
- Vá em cada produto e selecione as coleções apropriadas
- Ou use tags automáticas (ex: tag "crossfit" adiciona à coleção Crossfit)

---

## 🎨 Paleta de Cores Usada

```css
Roxo Principal: #7B3F9D
Rosa: #E91E63
Amarelo: #FFC107
Laranja: #FF6B35
Roxo Claro: #9C51B6
Texto: #333333
Texto Claro: #666666
Fundo: #FFFFFF
```

---

## ✅ Checklist de Instalação Shopify (Rise)

### Setup Básico
- [ ] Tema Rise instalado
- [ ] CSS customizado criado (`custom-raia01.css`) e linkado no `theme.liquid`
- [ ] JavaScript customizado criado (`custom-raia01.js`) e linkado no `theme.liquid`
- [ ] Font Awesome incluído no `<head>`
- [ ] Logo (2.png) enviada e configurada
- [ ] Cores da marca configuradas em Theme Settings

### Coleções
- [ ] Coleção "Crossfit" criada
- [ ] Coleção "Academia" criada
- [ ] Coleção "Beach Tennis" criada
- [ ] Coleção "Lançamentos" criada
- [ ] Imagens das coleções adicionadas
- [ ] Produtos adicionados às coleções

### Navegação
- [ ] Menu principal configurado
- [ ] Links das coleções funcionando
- [ ] Página "Sobre Nós" criada

### Home Page
- [ ] Banner hero/slideshow configurado
- [ ] Seção de categorias (Collection list) adicionada
- [ ] Seção de produtos em destaque
- [ ] Newsletter footer configurada

### Redes Sociais & Contato
- [ ] WhatsApp flutuante adicionado (número correto)
- [ ] Redes sociais configuradas em Theme Settings
- [ ] Instagram linkado
- [ ] Links do footer configurados

### Finalização
- [ ] Testado no desktop
- [ ] Testado no mobile
- [ ] Cores verificadas
- [ ] Imagens otimizadas
- [ ] SEO básico configurado (título, descrição)
- [ ] Domínio conectado (se aplicável)

---

## 🆘 Problemas Comuns (Shopify)

### Os ícones não aparecem?
→ Verifique se adicionou o Font Awesome no `<head>` do `theme.liquid`

### As cores não mudaram?
→ Vá em **Theme Settings** → **Colors** e configure manualmente

### O CSS customizado não está funcionando?
→ Verifique se adicionou a linha `{{ 'custom-raia01.css' | asset_url | stylesheet_tag }}` no `theme.liquid`
→ Certifique-se de que o arquivo está em **Assets**

### O menu mobile não abre?
→ O tema Rise já tem menu mobile nativo, não precisa customizar

### As imagens não carregam?
→ Use o upload da Shopify (**Settings** → **Files**)
→ Copie as URLs geradas pela Shopify

### O WhatsApp não aparece?
→ Verifique se adicionou o código antes do `</body>` no `theme.liquid`
→ Limpe o cache do navegador (Ctrl+Shift+R)

### Erro "Liquid syntax error"?
→ Certifique-se de que está usando tags Liquid corretas
→ Não cole HTML puro em arquivos `.liquid` sem adaptar

---

## 📚 Recursos Úteis

- **Documentação Shopify:** https://help.shopify.com/
- **Tema Rise:** https://themes.shopify.com/themes/rise/
- **Shopify Community:** https://community.shopify.com/
- **Instagram da Loja:** [@raia1.fitstore](https://instagram.com/raia1.fitstore)

---

## 💡 Dicas Extras

### Apps Recomendados (Shopify App Store)

1. **Klaviyo** - Email marketing e automação
2. **Judge.me** - Reviews de produtos
3. **Loox** - Reviews com fotos
4. **Privy** - Popups e newsletters
5. **PageFly** - Page builder avançado
6. **Kit** - Assistente de marketing

### SEO Básico

1. **Otimize títulos e descrições:**
   - Vá em cada produto/coleção
   - Edite "Search engine listing"
   - Use palavras-chave relevantes

2. **Alt text nas imagens:**
   - Todas as imagens devem ter texto alternativo
   - Descreva o produto/coleção

3. **URLs amigáveis:**
   - Configure handles curtos e descritivos
   - Ex: `/collections/crossfit` não `/collections/colecao-1`

---

## 🎉 Pronto! Site Raia 01 na Shopify

Após seguir todos os passos, seu site estará com:

✅ **Tema Rise** customizado com as cores da Raia 01
✅ Logo profissional no header
✅ Menu de navegação com coleções organizadas
✅ Banner hero impactante na home
✅ Seção de categorias (Crossfit, Academia, Beach Tennis)
✅ WhatsApp flutuante para atendimento
✅ Footer com redes sociais e newsletter
✅ Design responsivo (mobile e desktop)
✅ Animações e interatividade
✅ SEO otimizado

---

## 🚀 Próximos Passos

1. **Adicionar produtos:**
   - Tire fotos profissionais dos produtos
   - Escreva descrições detalhadas
   - Configure variantes (tamanhos, cores)
   - Adicione às coleções corretas

2. **Configurar pagamentos:**
   - Shopify Payments
   - Mercado Pago
   - PIX

3. **Configurar envio:**
   - Defina zonas de envio
   - Configure transportadoras
   - Ative frete grátis acima de X reais

4. **Marketing:**
   - Crie conta no Instagram Business
   - Configure Facebook Pixel
   - Crie campanhas de lançamento
   - Ofereça cupom de primeira compra

5. **Testar tudo:**
   - Faça uma compra teste
   - Teste em diferentes dispositivos
   - Verifique emails automáticos

---

**Boa sorte com a loja Raia 01! Sucesso nas vendas! 💪🏽🎯**