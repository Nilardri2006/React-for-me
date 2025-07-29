import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'



const CHILDc = () => {
  const user = useContext(UserContext);
  const {theme,settheme} = useContext(ThemeContext);
  function click(){
    if(theme==='light')
    {
      settheme('dark')
    }
    else{
      settheme('light')
    }
  }
  return (
    <div>
      
      <button onClick={click}>
        Change Theme
      </button>
      {user.name}
    </div>
  )
}

export default CHILDc
