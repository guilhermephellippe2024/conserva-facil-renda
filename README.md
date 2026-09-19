# Método Conserva Fácil — duas páginas de vendas

Projeto **React + Vite + Tailwind CSS v4**, com duas páginas independentes e o mesmo produto/preço. Sem roteador, estado global, biblioteca de formulários, fontes externas, vídeos em autoplay ou scripts de rastreamento.

## Rodar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

- Ângulo A — consumo próprio: `http://localhost:5173/`
- Ângulo B — renda extra: `http://localhost:5173/renda-extra/`

## Configuração obrigatória antes de publicar

Abra `.env` e defina:

```env
VITE_CHECKOUT_URL=https://SEU-CHECKOUT-REAL
```

Opcionalmente, se precisar de URLs independentes para medir a conversão de cada ângulo:

```env
VITE_CHECKOUT_URL_CASA=https://SEU-CHECKOUT-REAL-PARA-CASA
VITE_CHECKOUT_URL_RENDA=https://SEU-CHECKOUT-REAL-PARA-RENDA
```

O mesmo checkout pode atender às duas páginas. Parâmetros `utm_*` presentes na URL da página são repassados ao checkout caso não estejam definidos nele; quando não existir `utm_content`, será adicionado `pagina_casa` ou `pagina_renda`. Verifique se sua plataforma de pagamento aceita os parâmetros. O site **não** instala pixels de terceiros nem registra conversões por conta própria.

**Sem checkout válido, o botão final é propositalmente desabilitado e exibe um aviso de prévia**; não há links falsos ou ação de compra simulada. Os demais CTAs levam à seção de oferta.

### Informações do vendedor

Antes da publicação, forneça na página e/ou checkout dados reais do vendedor, atendimento, política de privacidade, condições de entrega, termos e demais informações legais necessárias. Não foram inventados depoimentos, avaliações, selos de garantia, prazos de acesso nem políticas comerciais.

### Segurança alimentar e promessa comercial

As páginas divulgam o conteúdo do PDF enviado; não inventam receitas ou prazos de validade e não prometem segurança incondicional. O ângulo renda extra diferencia **aprender receitas** de **estar autorizado a comercializar alimentos** e não promete faturamento ou ensina vendas/precificação que o produto não inclui. Revise tecnicamente os arquivos de receita e as exigências aplicáveis antes de vender.

## Build e deploy

```bash
npm run build
npm run preview
```

Publicar a pasta `dist/` como site estático na raiz do domínio. O build gera `dist/index.html` e `dist/renda-extra/index.html`, permitindo publicar cada ângulo sem servidor de rotas nem React Router. Não há dependência de backend.

No Netlify ou Vercel, use build `npm run build` e pasta de saída `dist`. Configure a variável `VITE_CHECKOUT_URL` (e opcionalmente as alternativas) **antes do build**, pois variáveis `VITE_` são incorporadas aos arquivos estáticos. Links de checkout não são segredos; nunca coloque chaves privadas ou tokens no `.env` do front-end.

## O que há nas duas páginas

- A: `/` — benefícios de consumo próprio, aprendizado e organização.
- B: `/renda-extra/` — aprendizado de receitas para explorar uma possível atividade comercial, com ressalvas sanitárias e sem promessa de ganho.
- Mesmo produto, **15 receitas + exatamente 3 bônus**, preço de teste **R$ 14,90**.
- Arquivos de bônus: Controle da despensa; Ficha da minha conserva; Botulismo em conservas. A lista de compras foi excluída da oferta.
- Imagens WebP feitas a partir do próprio material do produto, sem expor PDFs completos no diretório público.
- CSS compilado pelo Tailwind v4; tipografia de sistema/Georgia, sem solicitações a fontes externas.
- Imagens secundárias com `loading="lazy"`, capa prioritária, elementos HTML sem carrosséis/bibliotecas supérfluas, FAQ em `<details>` nativo.

## Próximos passos de validação

1. Configurar e testar o checkout real até o recebimento dos quatro PDFs.
2. Atualizar informações comerciais e legais reais antes de anunciar.
3. Instalar mensuração somente quando os IDs/consentimentos necessários estiverem definidos.
4. Criar criativos específicos para cada promessa, direcionando para a URL correspondente.
5. Comparar dados por conjunto anúncio+página, sem atribuir diferenças apenas à copy isoladamente.

## Estrutura

```
index.html                 ← Página A
renda-extra/index.html     ← Página B
src/App.jsx                ← Componentes compartilhados
src/content.js             ← Textos dos ângulos e catálogo das 15 receitas
src/styles.css             ← Tailwind v4 + pequenos estilos de identidade
public/images/             ← WebPs otimizados
.env.example               ← URLs de checkout
```
