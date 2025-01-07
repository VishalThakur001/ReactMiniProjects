import { useState } from 'react'
import ColorChange from './ColorChange';

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1);
  }

  function randomColor(){
    let r = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);
    let g = Math.round(Math.random() * 100);

    return `rgb(${r}, ${b}, ${g})`;
  }

  function handleChangeColor(){
    document.body.style.backgroundColor = randomColor();
  }

  return (
    <>
      <div style={{width: "100vw", height: 
        "100vh"
      }} onClick = {handleClick}>
        <ColorChange handleChangeColor={handleChangeColor}/>
        <br />
        <br />
        <h2>Click on the page: {count}</h2>
      </div>
    </>
  )
}

export default App
