import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <h3 style={{color: "#ffffff"}}>Counter Value = {count}</h3>
    <button onClick={ () => (count >= 10 ? "" : setCount(count +1) )}>Increase Count</button>
    <button onClick={ () => setCount (0)}>Reset Count</button>
    <button onClick={ () => (count <= 0 ? "" : setCount(count -1))}>Decrease Count</button>
    </>
  )
}

export default Counter