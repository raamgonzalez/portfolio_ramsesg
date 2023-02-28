import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='marquee'>
        <div>
            <span className='marquee__span'>#OPENTOWORK  <span className='marquee__span'> #OPENTOWORK</span></span>
            <span className='marquee__span'>#OPENTOWORK  <span className='marquee__span'> #OPENTOWORK</span></span>
        </div>
    </motion.div>
  )
}

export default Marquee