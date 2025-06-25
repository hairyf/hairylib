export function randomArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}

export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

export function randomString(size: number, chars = urlAlphabet) {
  let id = ''
  let i = size
  const len = chars.length
  while (i--)
    id += chars[Math.random() * len | 0]
  return id
}
