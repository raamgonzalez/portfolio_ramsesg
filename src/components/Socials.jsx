import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

const Socials = () => {

  const { rrss } = useContext(GlobalContext)

  return (

    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='social'>
      <li className='social__li social__li--noresponsive'>
      <motion.a
        className='social__a'
        href="mailto:gz.ramses.oc@gmail.com?subject=Contacto%20Laboral%20"
        activeClassName="active"
        whileTap={{scale: 0.90}}
        whileHover={{scale: 1.05, border: "1px solid #F2F2F2", transition: "all 1s ease-in-out"}}
        >
        CONTACT ME!
      </motion.a>
      </li>
      <ul className="social__ul">
        {
          rrss.map(({id, name, href, state}) => (
            state ? 
            <li className="social__li" key={id}><a className='social__a' href={href} target="_blank" rel='noreferrer' activeClassName="active">{name.toUpperCase()} ?</a></li>
            : null
            
          ))
        }
      </ul>
    </motion.section>
  
  )
}

export default Socials