import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <p id='counter-display'>You clicked {count} times</p>
            <button id='counter-button' onClick={() => { setCount(count + 1) }} >Cilck me</button>
            <button id='clear' onClick={()=>{setCount(0)}}>Clear</button>
        </div>
    )
}

export default Counter
