import { useCallback, useEffect, useState, useRef } from "react"

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM";
    if(numberAllowed){
      str += "1234567890";
    }
    if(charAllowed){
      str += "!@#$%^&*+=-_{}[]~`";
    }
      for (let i = 1; i <= length; i++) {
        let charIdx = Math.floor(Math.random() * str.length);
        pass += str.charAt(charIdx);
      }

      setPassword(pass);
    }
    ,[length, charAllowed, numberAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    }, [password])
  
    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (

    <>
      <div className="w-full h-screen" style = {{backgroundColor: "black"}}>

        <div className="bg-slate-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 pb-3">
          
          <h1 className="text-white text-center text-4xl">Password Generator</h1>

          <div className="flex shadow-lg overflow-hidden mb-4 rounded-lg mt-8"> 
            <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 py-1 px-2 text-white shrink-0 outline-none hover:bg-blue-800 hover:text-zinc-300"
            >Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
