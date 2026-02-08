//import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import logoCuraWhite from '../assets/fig/letter-cura-white.png'

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div>
        <Link to='home' smooth={true} offset={-50} duration={500}>
          <img className='navbar-logo-image' src={logoCuraWhite} alt='Home'/>
        </Link>        
      </div>
      <div>
        <Link to='home' smooth={true} offset={-50} duration={500}>Home</Link>
        <Link to='sobre' smooth={true} offset={-50} duration={500}>Sobre</Link>
        <Link to='modalidades' smooth={true} offset={-50} duration={500}>Modalidades</Link>
        <Link to='planos' smooth={true} offset={-50} duration={500}>Planos</Link>
        <Link to='equipe' smooth={true} offset={-50} duration={500}>Equipe</Link>
        <Link to='galeria' smooth={true} offset={-50} duration={500}>Galeria</Link>
        <Link to='contato' smooth={true} offset={-50} duration={500}>Contato</Link>
      </div>        
    </nav>
  )
}

export default NavBar

/**
 * <a href='#'>Home</a>
        <a href='#sobre'>Sobre</a>
        <a href='#modalidades'>Modalidades</a>
        <a href='#planos'>Planos</a>
        <a href='#equipe'>Equipe</a>
        <a href='#galeria'>Galeria</a>
        <a href='#contato'>Contato</a>
 */

/**
 * <Link to='/'>Home</Link>
 * <Link to='/sobre'>Sobre</Link>
 * <Link to='/modalidades '>Modalidades</Link>
 * <Link to='/planos'>Planos</Link>
 * <Link to='/equipe'>Equipe</Link>
 * <Link to='/galeria'>Galeria</Link>
 * <Link to='/contato'>Contato</Link>
 */