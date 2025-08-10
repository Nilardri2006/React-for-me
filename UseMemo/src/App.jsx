import { useMemo, useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[input, setinput] = useState(0)

    function expensiveTask(num)
    {
      console.log("Inside Expensive task");
      for(let i=0;i<=10000000000;i++)
      {
        return num*2;
      }
    }

    let doubleValue = useMemo(() => expensiveTask(input), [input])
  return (
    
      <div>
        <p>this  is a counter app</p>

        <button onClick={()=>setCount(count+1)}>
          Click me
        </button>
        <div>
          Count:{count}
        </div>
        <div>
          Double:{doubleValue}
        </div>
        <input
          type= 'number'
          placeholder = 'enter  a number'
          value = {input}
          onChange = {(e)=>setinput(e.target.value)}
        />
    </div>
  )
}

export default App
