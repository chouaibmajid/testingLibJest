import React, { useState } from 'react'

function Button() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>click+</button>
        <button onClick={() => setCounter(counter - 1)}>click-</button>
    </div>
  )
}

export default Button