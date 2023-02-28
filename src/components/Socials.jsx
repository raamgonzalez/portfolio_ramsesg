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
    transition={{ duration: 1 }}
    className='social'>
      <ul className="social__ul">
        {
          rrss.map(({id, name, href, state}) => (
            state ? 
            <li className="social__li" key={id}><a className='social__a' href={href} target="_blank" rel='noreferrer'>{name.toUpperCase()} ?</a></li>
            : null
            
          ))
        }
      </ul>
    </motion.section>
  
  )
}

export default Socials