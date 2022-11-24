export function formatToDecimalWithFractionOfTwoDigits(number: number) {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(number);
}