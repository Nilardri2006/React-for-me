import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

//first->side effect function
//second->clean up function
//first->comma seperated dep list


// const App = () => {
//   const [count, setcount] = useState(0)
//   const [total, settotal] = useState(1)
//   function clicking() {
//     setcount(count + 1);
//   }
//   function totaling() {
//     settotal(total + 1);
//   }

//-----------------------------------------------------------------------
  // //variation:1
  // //run on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })
  //-----------------------------------------------------------------------

  // //variation:2
  // //that runs on first render
  //   useEffect(() => {
  //   alert("I will run on only 1st render")
  // },[])
  //-----------------------------------------------------------------------

  // // //variation:3
  // // //i will run evry time when count is updated
  //   useEffect(() => {
  //   alert("i will run evry time when count is updated")
  // },[count])
  //as at first 0 is assigned to usestate  so i runs for 1st time even count is not updated though
//-----------------------------------------------------------------------

  //  //variation:4
  //  //Multiple dependencies
  // useEffect(() => {
  //   alert("i will run evry time when count/total is updated")
  // }, [count,total])

  //-----------------------------------------------------------------------
  // //variation:5
  // //Add a clean up function
  // useEffect(() => {
  //   alert("Count is Updated")
  //   return()=>{
  //     alert("Count is unmounted fro UI")
  //   }
  // }, [count])

  //-----------------------------------------------------------------------

  // return (
  //   <div>
      
  //     <button onClick={clicking}>Broom Broom</button>
  //     <br />
  //     <h1>count is:{count}</h1>
  //     <br/>
  //     <button onClick={totaling}>total</button>
  //     <br />
  //     <h1>total is:{total}</h1>
  //   </div>
  // )
// }

// ===================================================================================================================

const App = () => {
  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>
    </div>
  )
}

export default App

