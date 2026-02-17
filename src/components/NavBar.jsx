//import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import logoCuraWhite from '../assets/fig/letter-cura-white.png'

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div>
        <Link containerId='container' to='home' smooth={true} offset={-50} duration={500}>
          <img className='navbar-logo-image' src={logoCuraWhite} alt='Home'/>
        </Link>               
      </div>
      <div>
        <Link containerId='container' to='home' smooth={true} offset={-50} duration={200}>Home</Link>
        <Link containerId='container' to='sobre' smooth={true} offset={-50} duration={200}>Sobre</Link>
        <Link containerId='container' to='modalidades' smooth={true} offset={-50} duration={200}>Modalidades</Link>
        <Link containerId='container' to='planos' smooth={true} offset={-50} duration={200}>Planos</Link>
        <Link containerId='container' to='equipe' smooth={true} offset={-50} duration={200}>Equipe</Link>
        <Link containerId='container' to='galeria' smooth={true} offset={-50} duration={200}>Galeria</Link>
        <Link containerId='container' to='contato' smooth={true} offset={-50} duration={200}>Contato</Link>
      </div>        
    </nav>
  )
}

export default NavBar

/**
  <Link containerId='container' to='home' smooth={true} offset={-50} duration={500}>Home</Link>
  <Link containerId='container' to='sobre' smooth={true} offset={-50} duration={500}>Sobre</Link>
  <Link containerId='container' to='modalidades' smooth={true} offset={-50} duration={500}>Modalidades</Link>
  <Link containerId='container' to='planos' smooth={true} offset={-50} duration={500}>Planos</Link>
  <Link containerId='container' to='equipe' smooth={true} offset={-50} duration={500}>Equipe</Link>
  <Link containerId='container' to='galeria' smooth={true} offset={-50} duration={500}>Galeria</Link>
  <Link containerId='container' to='contato' smooth={true} offset={-50} duration={500}>Contato</Link>
 */

/**
  <a className='navbar-link' href='#home'>Home</a>
  <a className='navbar-link' href='#sobre'>Sobre</a>
  <a className='navbar-link' href='#modalidades'>Modalidades</a>
  <a className='navbar-link' href='#planos'>Planos</a>
  <a className='navbar-link' href='#equipe'>Equipe</a>
  <a className='navbar-link' href='#galeria'>Galeria</a>
  <a className='navbar-link' href='#contato'>Contato</a>
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