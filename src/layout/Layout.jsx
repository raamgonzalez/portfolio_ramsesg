import React from 'react'
import Marquee from '../components/Marquee'
import Header from '../components/Header'

const Layout = (props) => {

    const { children } = props

  return (
    <>
      <Marquee/>
      <main className='wrapper'>
          <Header/>
          {children}
      </main>
    </>
  )
}

export default Layout