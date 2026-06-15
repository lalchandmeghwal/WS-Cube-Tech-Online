import React, { useContext, useState } from 'react'
import { useMyContext } from "./store/MyContex";
const App = () => {

  const { count, setCount, } = useMyContext();
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };



  return (
    <div className=' text-center ' >
      <h1 className=' text-5xl font-bold my-5 '  >Counter App</h1>
      <h2 className=' text-5xl font-bold my-5 '  >{count}</h2>
      <button onClick={increment} className=' bg-black  cursor-pointer rounded py-2 px-3 text-xl  ' >Increment</button>
      <button onClick={decrement} className=' bg-black  cursor-pointer rounded py-2 px-3 text-xl mx-5  ' >Decrement</button>
    </div>
  )
}

export default App
