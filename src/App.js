import React from 'react'
import {atom, useRecoilState} from 'recoil'

const counterState = atom({
  key: "counterState",
  default: 0
})

function App() {
  const [count, setCount] = useRecoilState(counterState)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <p> Count: {count} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
