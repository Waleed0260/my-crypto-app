import React from 'react'
import Home from './Home'
import {Routes, Route} from "react-router-dom"
import Coin from './Coin'
function Pages() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:name" element={<Coin/>}/>
    </Routes>
    </div>
  )
}

export default Pages
