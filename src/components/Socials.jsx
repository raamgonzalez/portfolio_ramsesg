import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Socials = () => {

  const { rrss } = useContext(GlobalContext)

  return (

    <section className='social'>
      <ul className="social__ul">
        {
          rrss.map(({id, name, href, state}) => (
            state ? 
            <li className="social__li" key={id}><a className='social__a' href={href} target="_blank" rel='noreferrer'>{name.toUpperCase()} ?</a></li>
            : null
            
          ))
        }
      </ul>
    </section>
  
  )
}

export default Socials