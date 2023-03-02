import React from 'react'
import Homepage from './homepage'
import Cuisine from './cuisine'
import {Route, Routes} from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  )
}

export default Pages;