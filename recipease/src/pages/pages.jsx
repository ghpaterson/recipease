import React from 'react'
import Homepage from './homepage'
import Cuisine from './cuisine'
import Searched from './searched'
import Recipe from './recipe'
import {Route, Routes} from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  )
}

export default Pages;