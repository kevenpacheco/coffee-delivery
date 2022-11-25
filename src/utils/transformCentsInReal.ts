export function transformCentsInReal(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  }).format(cents / 100);
}