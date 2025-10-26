export function verificarItensListas(l1: unknown[], l2: unknown[]) {
  return l1.every((itemL1) => l2.includes(itemL1));
}
