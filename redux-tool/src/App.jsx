import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement, reset, incrementByAmount } from './Features/Counter/CounterSlice';

function App() {
  const [amount,setAmount]=useState(0);
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Counter:{count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button onClick={handleResetClick}> Reset </button>
        <br/>
        <br/>
        <input
        type='Number'
        value = {amount}
        placeholder='Enter Amount'
        onChangeCapture={(e)=>setAmount(e.target.value)}
        />
        <br/>
        <br/>
        <button onClick={handleIncAmountClick}> Inc by amount </button>
        
      </div>

  )
}

export default App
