import React from 'react'
import LoginBtn from './components/LoginBtn'
import LogOut from './components/LogOut'
import { useState } from 'react'

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  //early return +logical operator
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Welcome in this unknow App</h1>
        <LoginBtn />
      </div>

    )
  }
  return (
    <div>
      <h1>Welcome in this unknow App</h1>
      {/* using logical operator */}
      {isLoggedIn && <LogOut />}
    </div>
  )


  // return(
  //   <div>
  //     {/* using ternary operator */}
  //     {isLoggedIn?<LoginBtn/>:<LogOut/>}
  //   </div>
  // )

  //using if else
  // if(isLoggedIn){
  //   return(
  //     <LogOut/>
  //   )
  // }
  // else{
  //  <LoginBtn/>
  // }
  // return (
  //   <div>
  //     <h1>hello jee</h1>

  //   </div>
  // )
}

export default App
