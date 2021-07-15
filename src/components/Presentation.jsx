import React from 'react'

const Presentation = () => {
  const value = '' + window.location
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  console.log(getCurrentTheme())
  // const indexdies = value.indexOf('#');
  const searchsplit = value.split('#')

  const title_choice = () => {
    let title
    switch (searchsplit[1]) {
      case '3d': title = 'CG Artist'
        break
      case 'dev': title = 'web developper'
        break
      default: title = 'CG Artist | web developper'
        break
    }
    return title
  }

  const style_choice = () => {
    let style
    switch (searchsplit[1]) {
      case '3d': style = 'cg'
        break
      case 'dev': style = 'dev'
        break
      default: style = 'all'
        break
    }
    return style
  }

  return (
    <div className='presentation' id={style_choice()}>
      <img src='./img/presentation/p1.jpg' alt='logo' />
      <h3>{title_choice()}</h3>
    </div>
  )
}

export default Presentation
