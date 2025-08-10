import { useEffect, useState } from 'react';
import './App.css'
import { useRef } from 'react';



function App() {
// const [count, setcount] = useState(0);
// let val = useRef(0);
// let btnRef = useRef()
// function handleInc(){
//   val.current =val.current + 1;//in every time u press the button the value of val cant be persisited it always rerenders and give the value 1 so we use use ref
//   setcount(count+1);
// }
// function changeColor(){
//   btnRef.current.style.backgroundColor = "blue";
// }

// useEffect(() => {
//   console.log("I am incremented")
//   console.log("Value of val:",val)

// })

  const [time, settime] = useState(0);
  let timeRef= useRef(null);

  function startTimer(){
    timeRef.current = setInterval(() => {
      settime(time=>time+1);
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    settime(0);
  }


  return (
    <div>
      <h1>Stopwatch:{time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/>
      <br/>
      <button onClick={stopTimer}>
        Stop
      </button>
      <br/>
      <br/>
      <button onClick={resetTimer}>
        Reset
      </button>
      <br/>
      <br/>
      
      {/* <button ref={btnRef} onClick={handleInc}>
        Increment
      </button>

      <br/>

      <div>
        Count: {count}
      </div>

      <button onClick={changeColor}>
        Change Colour of 1st button
      </button> */}
    </div>
  )
}

export default App
