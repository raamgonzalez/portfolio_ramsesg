import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Projects from '../views/Projects'
import Softs from '../views/Softs'


const Rutas = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location = { location } key = { location.pathname }>
        <Route path = "/" element = { <Home/> } />
        <Route path = "*" element = { <NotFound/> } />
        <Route path = '/projects' element = { <Projects/> } />
        <Route path = '/skills' element = { <Softs/> } />
      </Routes>
    </AnimatePresence>
  )
}

export default Rutas