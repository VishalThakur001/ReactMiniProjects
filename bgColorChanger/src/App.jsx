import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style = {{backgroundColor: color}}>

        <div className="fixed flex flex-wrap bottom-8 justify-center inset-x-0 px-3">

          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            
            <button
            onClick={() => setColor("red")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'red'}}
            >Red</button>
            
            <button
            onClick={() => setColor("grey")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'grey'}}
            >Grey</button>

            <button
            onClick={() => setColor("green")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'green'}}
            >Green</button>

            <button
            onClick={() => setColor("blue")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'blue'}}
            >Blue</button>

            <button
            onClick={() => setColor("orange")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'orange'}}
            >Orange</button>

            <button
            onClick={() => setColor("black")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'black'}}
            >Black</button>

            <button
            onClick={() => setColor("seagreen")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'seagreen'}}
            >Seagreen</button>

            <button
            onClick={() => setColor("pink")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'pink'}}
            >Pink</button>

            <button
            onClick={() => setColor("yellow")}
            className="rounded-3xl px-2 py-1 text-white"
            style={{backgroundColor: 'yellow'}}
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
