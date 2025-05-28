import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter < 20)
    {
      setCounter(counter+1)
    }
    else
    {
      alert("Number can't exceed 20")
    }
    
  }

  const removeValue = () => {
    if(counter > 0)
    {
      setCounter(counter-1)
    }
    else
    {
      alert("Number cant be below 0")
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

{}

export default App
