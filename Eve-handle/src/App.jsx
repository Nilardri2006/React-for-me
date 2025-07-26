import React from 'react'

const App = () => {

  function handleClick() {
    alert("I am clicked");
  }
  function handleInputChange(e) {
    console.log("value till now: ", e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    //i am writing my custom behaviour
    alert("Form submit kardu bete?");
  }
  return (
    <div>
      {/* Immediate Invocation */}
      {/* <button onClick={alert("This is due to immmediate imvocation")}>
        Immediate Invocation
      </button> */}
      {/* solution of Immediate Invocation */}
      <button onClick={()=>alert("This is due to immmediate imvocation")}>
        Immediate Invocation
      </button>

      <form onSubmit={submit}>
        <input type='text' onChange={handleInputChange}></input>
        <button type='submit' >Submit</button>
      </form>

      <p onMouseOver={() => { alert("i feel something") }}>
        I am nothing,God is every thing
      </p>
      
      <button onClick={handleClick}>
        Click Me
      </button>

    </div>
  )
}

export default App
