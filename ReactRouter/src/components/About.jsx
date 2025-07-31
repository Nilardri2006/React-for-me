import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function click(){
    navigate('/dashboard');
  }
  return (
    <div>
      About Page
      <button onClick={click}>
        Move to Dashboard
      </button>
    </div>
  )
}

export default About
