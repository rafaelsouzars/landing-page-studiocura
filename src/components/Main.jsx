import React from 'react'
import { Home, Sobre, Modalidades, Planos, Equipe, Galeria, Contato } from '../pages'

const Main = () => {
  return (
    <main id='container'>
      <Home/>
      <Sobre/>
      <Modalidades/>
      <Planos/>
      <Equipe/>
      <Galeria/>
      <Contato/>
    </main>
  )
}

export default Main