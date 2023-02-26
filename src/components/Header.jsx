import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__navbar navbar'>
          <li className='navbar__li'><NavLink to='/' activeClassName='active'>ABOUT ME</NavLink></li>
          <li className='navbar__li'><NavLink to='/skills' activeClassName='active'>SKILLS</NavLink></li>
          <li className='navbar__li'><NavLink to='/projects' activeClassName='active'>PROJECTS</NavLink></li>
      </ul>
      <section className='navbar__brand brand'>
        <img className='brand__logo' src='./media/about/portfolio_brand.svg' alt='Logo de Ramses'/>
      </section>
    </header>
  )
}

export default Header 