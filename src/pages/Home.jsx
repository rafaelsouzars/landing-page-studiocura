import React from 'react'
import { Element, Link } from 'react-scroll'
import './Home.css'

const Home = () => {
  
  /*scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50, // Ajuste de alinhamento
    })*/  

  return (
    <>  
      <Element name='home'>
        <section className='main-content-home'>
        <h1>Encontre o equilibrio</h1>
        <p>Um espaço dedicado ao seu bem-estar, onde corpo e mente se</p>
        <p> conectam através do movimento consciente.</p> 
        <div className='main-container-buttons'>
          <span>
            <button className='main-content-button'>              
              <Link containerId='container' to='modalidades' smooth={true} offset={-50} duration={200}>
                Conheça nossas especialidades
              </Link>
            </button>
          </span>
          <span>
            <button className='main-content-button'>              
              <Link containerId='container' to='contato' smooth={true} offset={-50} duration={200}>
                Agende uma aula experimental
              </Link>
            </button>
          </span>
        </div> 
        </section> 
      </Element>              
    </>
    
  )
}

export default Home