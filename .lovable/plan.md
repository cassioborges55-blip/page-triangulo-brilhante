

## Plan: Substituir logo e ajustar tamanho

### O que será feito
1. Copiar a nova logo (`Logo_PAGE_Eventos_branco-2.png`) para `src/assets/`
2. Atualizar **Navbar.tsx**: importar a nova imagem e definir altura da logo como 80% da altura da barra (navbar tem `h-16` mobile = 64px → logo 51px; `h-20` desktop = 80px → logo 64px)
3. Atualizar **Footer.tsx**: importar a nova imagem e manter proporção generosa

### Detalhes técnicos
- Navbar: classe da img será `h-[51px] md:h-[64px] w-auto`
- Footer: classe da img será `h-[64px] w-auto`
- Ambos os componentes importarão de `@/assets/Logo_PAGE_Eventos_branco-2.png`

