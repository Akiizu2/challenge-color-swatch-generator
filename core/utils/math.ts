export function randomDecimal(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Math.floor(randomNumber);
}
