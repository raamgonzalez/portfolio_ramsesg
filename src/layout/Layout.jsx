import React from 'react'
import Marquee from '../components/Marquee'
import Header from '../components/Header'
import { motion } from 'framer-motion'

const Layout = (props) => {

    const { children } = props

  return (
    <>
      <Marquee/>
      <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='wrapper'>
          <Header/>
          {children}
      </motion.main>
    </>
  )
}

export default Layout