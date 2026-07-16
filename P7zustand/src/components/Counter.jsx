import { useCounterStore } from "../store/counterStore"

function Counter() {

    const {count, increase, decrease, reset} = useCounterStore()

    // this whole thing re-render page when change in any val, so reduce performance instead we can create or render individually by creating separate components

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
