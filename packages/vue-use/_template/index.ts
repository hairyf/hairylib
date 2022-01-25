import { ref } from 'vue-demi'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const inc = (delta = 1) => (count.value += delta)
  const dec = (delta = 1) => (count.value -= delta)
  const get = () => count.value
  const set = (value: number) => (count.value = value)
  const reset = (value = initialValue) => {
    initialValue = value
    return set(value)
  }

  return { count, inc, dec, get, set, reset }
}
