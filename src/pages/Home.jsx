import React from 'react'
import { Element } from 'react-scroll'
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
        <section className='main-content-home'>Home</section> 
      </Element>              
    </>
    
  )
}

export default Home