import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=>props.setname(e.target.value)} />
      <p>Name variable ki value inside card:{props.name}</p>
    </div>
  )
}

export default Card
