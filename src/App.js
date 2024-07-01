import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, originals } from './urls'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={action} title='Action' isSmall />
    </div>
  )
}

export default App
