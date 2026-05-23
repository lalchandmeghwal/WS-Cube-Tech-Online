
import React from 'react'
import Cart from './components/Cart';

const App = () => {
  
  const obj = {
    fatherName: 'Nemi Chand',
    motherName:'Gita Devi'
  }

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold  ' >Lal chand meghwal</h1>
      <Cart name="Lal Chand " age={21} data={obj} key={10}  />
      <Cart name=" Sonu  " age={21}   />
    </div>
  )
};


export default App
