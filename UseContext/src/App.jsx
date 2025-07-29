import React, { createContext } from 'react'
import CHILDa from './component/CHILDa';
import { useState } from 'react';
import './App.css';

//STEP1 create context
//STEP2 wrap the child as provider
// STEP3  pass value
// STEP4  consumer ke andar jake consume karlo

const ThemeContext = createContext();
const UserContext = createContext();

const App = () => {
  const [theme, settheme] = useState('light')
  const [user, setuser] = useState({name:"love"})

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <div id='container' style={{ backgroundColor: theme === 'light' ? "beige" : "black" }}>
          <CHILDa />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
  // return (
  // )

}

export default App
export { UserContext }
export { ThemeContext }
