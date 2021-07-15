import React, { useEffect, useState } from 'react'
import all from '../assets/all.json'

import Description from './Description'

const Projects = () => {
  // const step=200;
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [playOnce, setPlayOnce] = useState(true)
  const [selectedRadio, setSelectedRadio] = useState('')
  const radios = ['3d', 'print', 'realistic', 'video', 'web', 'webgl', 'pro']

  const [activeElement, setActiveElement] = useState('')

  const value = '' + window.location
  // const indexdies = value.indexOf('#');
  const searchsplit = value.split('#')
  console.log(searchsplit)
  // premier traitement
  const premier_traitement = () => {
    switch (searchsplit[1]) {
      case '3d': setSelectedRadio('3d')
        // configurer l'interface avec le style 3d
        break
      case 'dev': setSelectedRadio('web')
        // configurer l'interface avec le style dev project
        break
      case 'monteur': setSelectedRadio('video')
        // configurer l'interface avec le style dev project
        break
      case 'infographiste': setSelectedRadio('print')
        // configurer l'interface avec le style dev project
        break
      default:console.log('default, all loading')
        break
    }
    return null
  }

  premier_traitement()
  useEffect(() => {
    if (playOnce) {
      setData(all)
      // animer l'introduction
      setPlayOnce(false)
    }

    const sortedProjects = () => {
      const projectsObj = Object.keys(data).map((i) => data[i])
      const sortedArray = projectsObj.sort((a, b) => {
        return b.date.year - a.date.year
      })
      // sortedArray.length = 5;
      setSortedData(sortedArray)
    }
    sortedProjects()
  }, [data, playOnce])

  const elem_click = (e) => {
    // recupere l'element actif
    setActiveElement(e)
    // recupere les icones
    const project_list = document.getElementById('menu_projet')
    project_list.classList.remove('deselect')
    project_list.classList.add('select')
    const cancel = document.getElementById('cancel')
    cancel.classList.add('select')
    console.log('je viens de clicker sur un element')
    //   ReactDom.render(
    //       document.getElementById('app')
    //   );
    // rafraichir le composants Description
  }

  const press_on_exit = () => {
    console.log('press on exit')
    const project_list = document.getElementById('menu_projet')
    project_list.classList.remove('select')
    project_list.classList.add('deselect')
    const cancel = document.getElementById('cancel')
    cancel.classList.remove('select')
    // recupere la description
    setActiveElement(null)
  }
  //  const press_on_left=()=>{
  //      console.log("press on left button");
  //      //rechercher dans la liste ou est l'active element
  //      //le decrementer
  //  }
  //  const press_on_right=()=>{
  //     console.log("press on right button");
  //     //rechercher dans la liste ou est l'active element
  //      //l'incrementer
  // }
  const radio_change = (e) => {
    setSelectedRadio(e.target.value)
    // setRangeValue(0);
    // setAnimate(false);//permet de relancer l'animation d'intro des vignettes
  }
  const logo_choice = (qui) => {
    // console.log(qui.search("webgl"));
    let add_class = ''
    if (qui.search('webgl') !== -1) {
      add_class = ' webgl'
    }
    if (qui.search('video') !== -1) {
      add_class = ' video'
    }

    return 'project_logo' + add_class
  }

  return (
    <>
      <div className='projects'>
        {activeElement && <Description props={activeElement} />}
        {activeElement && <div className='button' id='button_exit' onClick={() => press_on_exit()} />}
        {/* {activeElement &&  <Exit onClick={()=> press_on_exit()}/>}     */}

        <div className='sort-container'>

          <ul>
            {radios.map((radio) => {
              return (
                <li key={radio}>
                  <input
                    type='radio' value={radio} id={radio}
                    checked={radio === selectedRadio}
                    onChange={(e) => radio_change(e)}
                  />
                  <label htmlFor={radio}>{radio}</label>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='cancel' id='cancel'>
          {selectedRadio && <h5 onClick={() => setSelectedRadio('')}> cancel selection</h5>}
        </div>

        <ul className='projects-list' id='menu_projet'>
          {sortedData
            .filter((projects) => projects.keywords.includes(selectedRadio))
            .map((projects, index) => (
              <li className='preview' style={{ height: projects.css_size }} key={index}>
                <img src={projects.path + projects.img} alt={projects.name} style={{ height: projects.css_size }} />
                <div className={logo_choice(projects.keywords)} />
                <div className='data-container' onClick={(e) => { elem_click(projects) }}>
                  <ul>
                    <li>{projects.name} </li>
                    <li>{projects.categorie} </li>
                    <li>{projects.date.year}</li>
                    {/* <li>Pop. {numberFormat(country.population)} </li> */}
                  </ul>
                </div>
              </li>

            ))}

        </ul>

      </div>

    </>
  )
}

export default Projects
