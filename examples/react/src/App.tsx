import { ref, withEffectScope } from '@hairy/react-lib-composition'
import { useElementHover } from '@vueuse/core'
import { useState } from 'react'
import './App.css'

const App = withEffectScope(() => {
  const [count, setCount] = useState(0)
  const el = ref<HTMLDivElement>()
  const hover = useElementHover(el)
  return (
    <>
      <div ref={el}>el</div>
      <div>
        hover:
        {hover.value ? 'true' : 'false'}
      </div>

      <button onClick={() => setCount(count + 1)}>
        increment
      </button>
      <div>
        count:
        {count}
      </div>
    </>
  )
})

export default App
