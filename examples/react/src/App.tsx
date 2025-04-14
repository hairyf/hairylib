import { defineAsyncStore, defineStore } from '@hairy/react-lib'
import { delay } from '@hairy/utils'
import reactLogo from './assets/react.svg'
import './App.css'
import viteLogo from '/vite.svg'

const store = defineStore(
  {
    state: () => ({
      count: 0,
      arg: 1,
    }),
    actions: {
      increment() {
        this.count++
      },
      async incrementAsync() {
        await delay(1000)
        this.count++
      },
    },
    getters: {
      doubleCount() {
        return this.count * 2
      },
    },
  },
  {},
)
const asyncStore = defineAsyncStore(
  async () => {
    await delay(1000)
    return 'async store'
  },
  { initial: 'initial async value' },
)

function mu(value: any) {
  return `${value} (${new Date().toISOString()})`
}
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {new Date().toUTCString()}
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <button style={{ marginRight: 20 }} onClick={() => store.increment()}>
            increment
          </button>
          <button onClick={() => store.incrementAsync()}>
            async increment
          </button>
        </div>
        <p>
          count is
          {' '}
          {store.$signal(state => mu(state.count))}
          <br />
          double count is
          {' '}
          {store.$signal(state => mu(state.doubleCount))}
          <br />
          arg is
          {' '}
          {store.$signal(state => mu(state.arg))}
        </p>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
        <p>
          status is
          {' '}
          {store.$signal.status(status => mu(JSON.stringify(status)))}
        </p>
        <p>
          async store is
          {' '}
          {asyncStore.$signal(state => mu(JSON.stringify(state)))}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
