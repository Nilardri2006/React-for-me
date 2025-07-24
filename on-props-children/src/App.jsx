import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0);
  function handleClick(){
    setcount(count=>count+1);
  }
  return (
    <div>
      <Button handleClick={handleClick} text ="Click Me" >
        <h1>{count}</h1>
        
        </Button>
      {/* <Card name="roney">
        <h1>BEST WEBDEV COURSE</h1>
        <p>TRYING TO BE CONSISTENT IN THIS</p>
        <p>TRYING TO BE CONSISTENT IN THIS</p>
      </Card>
      <Card>
        <h1>Hello How u are doing</h1>
      </Card> */}
    </div>
  )
}

export default App
