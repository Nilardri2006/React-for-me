import { useState } from 'react'
import './App.css'
import Childcomponents from './Components/Childcomponents'
import { useCallback } from 'react'
import ExpensiveComponent from './Components/ExpensiveComponent'


function App() {
  const [count, setCount] = useState(0)

  const handleClick=useCallback(()=>{
    setCount(count+1);
  },[count]);

  return (
    <div>
      <div>
        <ExpensiveComponent/>
         Count = {count}
      </div>
      {/*
       <div>
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
      <div>
        <Childcomponents
          buttonName="Click meee2"
          handleClick={handleClick}
        />  
        Unnecessary rerendering ,so to preventt it wrap that component in react.memo->now now component rerender tabhi hogs jab props change honge nahi to nahi hoga 
         */}


    </div>
  )
}

export default App
