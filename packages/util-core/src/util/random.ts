export function randomNumer(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function randomArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}
