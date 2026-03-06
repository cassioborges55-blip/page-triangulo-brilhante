

## Plano de alteracoes na landing page

Sao 22 alteracoes distribuidas em 10 arquivos. Segue o detalhamento por arquivo:

---

### 1. `src/components/landing/Hero.tsx`
**Alteracao 1** — Trocar headline principal:
- De: `A plataforma de eventos do Triângulo Mineiro`
- Para: `Chega de fila, fraude e planilha no seu evento.`
- Subtitulo e CTAs permanecem iguais

---

### 2. `src/components/landing/ProblemsSection.tsx`
**Alteracao 6** — Adicionar micro-CTA abaixo dos 6 cards:
- Texto centralizado em cinza claro: "Se marcou 3 ou mais, a Page foi feita para voce"
- Seta `↓` em verde (cor primary)
- Posicionado apos o grid de cards, com `mt-10 text-center`

---

### 3. `src/components/landing/SolutionsSection.tsx`
**Alteracao 7** — Expandir de 4 para 6 cards (grid `md:grid-cols-2 lg:grid-cols-3`):
- Manter os 4 cards atuais
- Adicionar card 5: icon `Car` (lucide), titulo "Gestao de Estacionamento", descricao e 3 bullets conforme especificado
- Adicionar card 6: icon `UtensilsCrossed` (lucide), titulo "Modulo F&B (praca de alimentacao)", descricao e 3 bullets conforme especificado

**Alteracao 8** — No card "Suporte Personalizado":
- Trocar descricao de "Nossa equipe VAI AO SEU EVENTO se necessario" para "Nossa equipe VAI AO SEU EVENTO. Sempre que precisar, estamos la."

---

### 4. `src/components/landing/ComparisonSection.tsx`
**Alteracao 9** — Linha "Investimento":
- Renomear para "Taxas"
- Coluna others: "12-15%"
- Coluna page: "A partir de 8%"

**Alteracao 10** — Adicionar 2 novas linhas ao array `comparisons`:
- `{ aspect: "Modulo F&B", others: "Nao tem", page: "Exclusivo", othersIsBad: true, pageIsGood: true }`
- `{ aspect: "Estacionamento", others: "Nao tem", page: "Integrado", othersIsBad: true, pageIsGood: true }`

---

### 5. `src/components/landing/HowItWorksSection.tsx`
**Alteracao 12** — Subtexto da aba Self-Service:
- De: "Em poucas horas voce sobe seu evento sozinho na plataforma."
- Para: "Em 30 minutos seu evento esta online vendendo ingressos."

**Alteracao 13** — Passo 1 dos `premiumSteps`:
- Trocar `duration` de "2-3h" para "~1h"

---

### 6. `src/components/landing/StatsSection.tsx`
**Alteracao 14 e 15** — Trocar os 2 ultimos stats:
- De: `{ value: 3858, suffix: "", label: "Seguidores confiantes" }` → Para: `{ value: 8, suffix: " seg", label: "Check-in medio" }`
- De: `{ value: 100, suffix: "%", label: "Clientes satisfeitos" }` → Para: `{ value: 0, suffix: "", label: "reclamacoes — Reclame Aqui" }`
- Para o "0 reclamacoes" sera necessario ajustar o AnimatedCounter para exibir "0" corretamente (ja funciona pois target=0 resultara em count=0)

---

### 7. `src/components/landing/RegionSection.tsx`
**Alteracao 16** — Uberaba no mapa:
- Adicionar badge verde "NOVO: equipe local" ao lado do dot de Uberaba, similar ao badge de Araxa
- Aumentar o dot de Uberaba e adicionar `animate-pulse-soft`

**Alteracao 17** — Texto abaixo do mapa:
- De: "Somos locais. Conhecemos cada cidade. Falamos presencialmente no seu evento."
- Para: "Somos locais. Conhecemos cada cidade. Agora com equipe em Uberaba e presenca presencial no seu evento."

---

### 8. `src/components/landing/FinalCTASection.tsx`
**Alteracao 18** — Trocar array `benefits` para:
```
"Zero estresse operacional"
"Publico satisfeito (sem filas!)"
"Dados reais para decisoes"
"Filas -70% nos eventos com Page"
"Equipe local no Triangulo Mineiro e Alto Paranaiba"
```

---

### 9. `src/components/landing/Footer.tsx`
**Alteracao 20** — Tagline:
- De: "A plataforma que movimenta os eventos de Araxa e regiao"
- Para: "A plataforma que movimenta os eventos do Triangulo Mineiro e Alto Paranaiba"

**Alteracao 21** — Endereco:
- De: "Araxa - MG"
- Para: "Araxa - MG | Uberaba - MG"

---

### 10. Novo arquivo: `src/components/landing/ContactFormSection.tsx`
**Alteracao 22** — Nova secao de formulario de contato:
- Titulo: "Fale com a equipe Page"
- Subtitulo: "Preencha e retornamos em ate 2 horas pelo WhatsApp."
- 4 campos: Nome (input), WhatsApp (input com mascara), Tipo de evento (select/dropdown), Publico estimado (select/dropdown)
- Botao verde: "Quero conhecer a Page"
- Texto abaixo: "Sem compromisso. Sem spam."
- Acao do submit: abre `mailto:contato@pageeventos.com.br` com os dados preenchidos (solucao client-side, sem backend)
- Usa componentes existentes: `Input`, `Select`, `Button`, `Label`

### 11. `src/pages/Index.tsx`
- Importar e inserir `ContactFormSection` entre `RegionSection` e `FinalCTASection`

---

### Nota sobre o formulario (item 22)

Como o projeto nao tem backend conectado (sem Supabase/Cloud), o formulario usara `mailto:` para enviar os dados por email. Se quiser envio automatico real (sem abrir o cliente de email do usuario), sera necessario conectar o Lovable Cloud ou Supabase para criar uma edge function que envie o email. Posso configurar isso depois se preferir.

---

### Resumo de arquivos alterados

| Arquivo | Tipo |
|---|---|
| `Hero.tsx` | Edicao |
| `ProblemsSection.tsx` | Edicao |
| `SolutionsSection.tsx` | Edicao |
| `ComparisonSection.tsx` | Edicao |
| `HowItWorksSection.tsx` | Edicao |
| `StatsSection.tsx` | Edicao |
| `RegionSection.tsx` | Edicao |
| `FinalCTASection.tsx` | Edicao |
| `Footer.tsx` | Edicao |
| `ContactFormSection.tsx` | Novo |
| `Index.tsx` | Edicao |

