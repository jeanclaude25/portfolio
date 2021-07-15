import React, { useState } from 'react'
import lang_de from '../assets/lang/de.jpg'
import lang_en from '../assets/lang/en.jpg'
import lang_fr from '../assets/lang/fr.jpg'

const Lang = () => {
  const [langActive, setLang] = useState('fr')

  return (
    <div className='lang'>
      <img src={lang_de} alt='deutsch' id='lang_de' onClick={() => setLang('de')} />
      <img src={lang_en} alt='english' id='lang_en' onClick={() => setLang('en')} />
      <img src={lang_fr} alt='français' id='lang_fr' onClick={() => setLang('fr')} />
    </div>
  )
}

export default Lang
