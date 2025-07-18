import { useState, useEffect } from 'react'
const Card = ({ title }) => {
  const [count,setCount]= useState(0);
  const [hasLiked, setHasLiked] = useState(false); {/*usestate*/ };


  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  },[hasLiked]);

  
  return (
    // <div className="card" style={{
    //   border:'2px solid #BDBAC9',
    //   padding:'20px',
    //   margin:'10px',
    //   backgroundColor: '#303035',
    //   borderRadius: '25px',
    //   minHeight:'100 px',
    //   }}> that is how inline css works
    <div className="card" onClick={()=> setCount(count+1)}>
      <h2>Card Component</h2>
      <h2>{title}<br/>{count|| null}</h2>{/* using props */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="roney">
      <h1>Functional Arrow Component</h1>

      <Card title="StarWars" rating={5} isCool={true} actors={[{ name: 'Actors' }]} />    {/* components */}
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  )
}


export default App
