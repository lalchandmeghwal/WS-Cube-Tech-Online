import React, { Component } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Outlet/>
        
        
      </div>
    )
  }
}

export default App
