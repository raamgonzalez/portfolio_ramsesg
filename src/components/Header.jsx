import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'


const Header = () => {
  return (
    <motion.header 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='header'>
      <ul className='header__navbar navbar'>
          <li className='navbar__li'><NavLink to='/' activeClassName='active'>ABOUT ME</NavLink></li>
          <li className='navbar__li'><NavLink to='/skills' activeClassName='active'>SKILLS</NavLink></li>
          <li className='navbar__li'><NavLink to='/projects' activeClassName='active'>PROJECTS</NavLink></li>
      </ul>
      <section className='navbar__brand brand'>
        <motion.img
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
        dragSnapToOrigin = {true}
        dragElastic={0.1}
        initial={{x: -800}}
        animate={{ x: 0 }}
        transition={{ }}
        className='brand__logo' src='./media/about/portfolio_brand.svg' alt='Logo de Ramses'/>
      </section>
    </motion.header>
  )
}

export default Header 