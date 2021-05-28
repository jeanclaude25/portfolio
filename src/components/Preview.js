import React from 'react';

const Preview = (props) => {
    const {projects} = props; //identique = props.country

    // const numberFormat = (x) => {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // }
    function elem_click(e){
        console.log(e.target.value);
    }

    return (
        <li className="preview" style={{height: projects.css_size}}>
            <img src={projects.img} alt={projects.name} style={{height: projects.css_size}}/>
            <div className="data-container" onClick={(e)=> {projects.link!=null && window.open(projects.link);elem_click(e)} }  >
                <ul>
                    <li>{projects.name} </li>
                    <li>{projects.categorie} </li>
                    <li>{projects.date.year}</li>
                    {/* <li>Pop. {numberFormat(country.population)} </li> */}
                </ul>
            </div>
        </li>
    );
};

export default Preview;