import React from 'react'
import mount from '../assets/mount.jpg'
import './user_card.css';

const Usercard = (props) => {
  return (
    <div className='user-container' style= {props.style}>
      <p id= 'user-name'>{props.name}</p>
      <img id = 'user-img' src ={mount} alt = 'love'></img>
      <p id='user-desc' >{props.desc}</p>
    </div>
  )
}

export default Usercard
