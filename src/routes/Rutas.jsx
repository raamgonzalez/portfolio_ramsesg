import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Projects from '../views/Projects'
import Softs from '../views/Softs'


const Rutas = () => {
  return (
    <Routes>
    <Route path = "/" element = { <Home/> } />
    <Route path = "*" element = { <NotFound/> } />
    <Route path = '/projects' element = { <Projects/> } />
    <Route path = '/skills' element = { <Softs/> } />
  </Routes>
  )
}

export default Rutas