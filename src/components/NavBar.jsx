//import { Link } from 'react-router-dom'
import logoCuraWhite from '../assets/fig/logo-cura-white.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div>
        <img className='navbar-logo-image' src={logoCuraWhite}/>
      </div>
      <div>
        <a href='#'>Home</a>
        <a href='#sobre'>Sobre</a>
        <a href='#modalidades'>Modalidades</a>
        <a href='#planos'>Planos</a>
        <a href='#equipe'>Equipe</a>
        <a href='#galeria'>Galeria</a>
        <a href='#contato'>Contato</a>
      </div>        
    </nav>
  )
}

export default NavBar

/**
 * <Link to='/'>Home</Link>
 * <Link to='/sobre'>Sobre</Link>
 * <Link to='/modalidades '>Modalidades</Link>
 * <Link to='/planos'>Planos</Link>
 * <Link to='/equipe'>Equipe</Link>
 * <Link to='/galeria'>Galeria</Link>
 * <Link to='/contato'>Contato</Link>
 */