import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  const addValue = () => {
    if(count === 20) return;
    setCount(count+1);
  }
  const decValue = () => {
    if(count === 0) return;
    setCount(count-1);
  }
  return (
    <>
      <h1>{count}</h1>
      <h1>Basic Counter</h1>
      <h3>0 &lt;= {count} &lt;= 20</h3>

      <button onClick={addValue} >Increase count</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease count</button>

    </>
  )
}

export default App
