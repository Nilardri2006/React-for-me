import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState, useCallback} from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0)
    const [input, setinput] = useState("")
    const previousFunction = useRef(null);

    const expensiveCalc = useCallback(() => {
        console.log("Running expensive calculation");
        let result = 0;
        for (let i = 0; i <= 10000000000; i++) {
            result += i;
        }
        return result;
    }, [count]);

    useEffect(() => {
        if (previousFunction.current) {
            if (previousFunction.current === expensiveCalc) {
                console.log("Function not recreated");
            }
            else {
                console.log("Function not recreated");
            }
        }
        else {
            previousFunction.current = expensiveCalc;
        }
    }, [expensiveCalc])


    return (

        <div>
            <input
                type="text"
                placeholder='type something'
                value={input}
                onChange={(e) => setinput(e.target.value)}
            />
            <p>
                Expensive Calculation result: {expensiveCalc()}
            </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                Count:{count}
            </div>
        </div>
    )
}

export default ExpensiveComponent
