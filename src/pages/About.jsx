import React from 'react'
import Navigation from '../components/Navigation'
import Presentation from '../components/Presentation'

const About = () => {
  return (
    <div>
      <Navigation />
      <Presentation />
      <h1>A propos</h1>
      <br />
      <p>
        «Passionné par l’image et l’informatique <br />
        depuis 2012, j’évolue en permanence mes <br />
        compétences pour être et rester polyvalent»<br />
        <br />
        N'hesitez pas à me contacter pour toutes <br />
        demandes de collaboration ou pour un devis.<br />
      </p>
    </div>
  )
}

export default About
