

## Substituir card "Venda Online 24/7" por "Split de receita e antecipação"

### O que muda

O primeiro card da seção "Page Eventos resolve tudo isso" (atualmente "Venda Online 24/7") sera substituido por um novo card com foco financeiro, cobrindo dois beneficios:

1. **Split de receita** -- divisao automatica entre organizador, fornecedor e plataforma, gerando otimizacao fiscal
2. **Antecipacao de recursos** -- PIX/debito com resgate imediato; credito com 50% antecipado e restante em D+2 apos o evento

### Detalhes do novo card

- **Icone:** `Banknote` (do lucide-react, mais adequado ao tema financeiro)
- **Titulo:** "Split de receita e antecipacao"
- **Descricao:** "Divisao automatica entre organizador, fornecedor e plataforma com otimizacao fiscal"
- **Features (checkmarks):**
  - "Split automatico entre as partes"
  - "Otimizacao de impostos integrada"
  - "PIX e debito: resgate na hora"
  - "Credito: 50% antecipado, restante D+2"

### Arquivo alterado

**`src/components/landing/SolutionsSection.tsx`**
- Trocar import de `Globe` por `Banknote` do lucide-react
- Substituir o primeiro objeto do array `solutions` (linhas 4-8) pelo novo card descrito acima

### Secao tecnica

```text
Antes (linha 3-8):
  { icon: Globe, title: "Venda Online 24/7", ... }

Depois:
  { icon: Banknote,
    title: "Split de receita e antecipacao",
    description: "Divisao automatica entre organizador, fornecedor e plataforma com otimizacao fiscal",
    features: [
      "Split automatico entre as partes",
      "Otimizacao de impostos integrada",
      "PIX e debito: resgate na hora",
      "Credito: 50% antecipado, restante D+2"
    ]
  }
```

Nenhum outro arquivo e afetado. A estrutura do grid e dos demais cards permanece identica.

