import { ref } from '@hairy/react-lib-composition'
import { useElementHover } from '@vueuse/core'
import './App.css'

function App() {
  const count = ref(0)
  const el = ref<HTMLDivElement>()
  const hover = useElementHover(el)

  return (
    <>
      <div ref={el}>el</div>
      <div>
        hover:
        {hover.value ? 'true' : 'false'}
      </div>

      <button onClick={() => count.value++}>
        increment
      </button>
      <div>
        count:
        {count.value}
      </div>
    </>
  )
}

export default App
