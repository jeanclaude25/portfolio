import React from 'react'
// import Description from './Description';

class Preview extends React.Component {
  // const {projects} = props;

  constructor (props) {
    super(props)
    this.projects = props
  }

  elem_click (e) {
    console.log(e)
    //  console.log(Description);
    //  new Description('',"visible");
    // appel d'ouverture du pop up
  }

  render () {
    const { projects } = this.projects

    return (
      <li className='preview' style={{ height: projects.css_size }}>
        <img src={projects.img} alt={projects.name} style={{ height: projects.css_size }} />
        <div className='data-container' onClick={(e) => { projects.link != null && window.open(projects.link); this.elem_click(this.projects) }}>
          <ul>
            <li>{projects.name} </li>
            <li>{projects.categorie} </li>
            <li>{projects.date.year}</li>
            {/* <li>Pop. {numberFormat(country.population)} </li> */}
          </ul>
        </div>
      </li>
    )
  }
}

export default Preview
