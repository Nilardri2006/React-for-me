import React from 'react'
import Card from './components/Card'
import { useState } from 'react';
//read react documentation

const App = () => {//Parent component
  //create state
  //manage state
  //change state
  //state will be synced to all childs
  const [name, setname] = useState('');

  return (
    <div>
      Hello ji
      <Card name={name} setname={setname}/> {/*child Component */}
      <p>I am inside parent component and the value of the name is:{name}</p>

      <Card title="Card1" name={name} setname={setname}/>
      <Card title="Card2" name={name} setname={setname}/>
    </div>
  )
}

export default App
