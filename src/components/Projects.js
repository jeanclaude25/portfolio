import React, {useEffect, useState} from 'react';
//import axios from "axios";
import Preview from './Preview';
import all from '../assets/all.json';
import Description from './Description';

const Projects = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [sizeValue, setSizeValue] = useState(100);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['3d','interactive','print','animation','realistic','video','web']

    const [selectedProjects, setSelectedProjects] = useState('');

    useEffect(() =>{
        if(playOnce){
        // axios
        //     .get(
        //         "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        //     )
        //     .then((res) => setData(res.data));
            setData(all);
            setPlayOnce(false);
        }

            const sortedProjects = () => {
                const projectsObj = Object.keys(data).map((i) => data[i]);
                const sortedArray = projectsObj.sort((a,b) => {
                    return b.date.year - a.date.year
                });
                //sortedArray.length = rangeValue;
                setSortedData(sortedArray);
                
            }
            sortedProjects();

     }, [data, playOnce, sizeValue]);
    

    return (
        <div className="projects">
            <Description sortedData={sortedData}/>
            
              <div className="sort-container">
            {/* <input type="range" min="75" max="300" value={sizeValue} 
             onChange={(e) => setSizeValue(e.target.value)} /> */}
            
            <ul>
                {radios.map((radio) => {
                    return(
                        <li key={radio}>
                            <input type="radio" value={radio} id={radio} 
                            checked={radio===selectedRadio}
                            onChange = {(e) => setSelectedRadio(e.target.value)}/>
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    )
                })}
            </ul>
            </div>  
            <div className="cancel">
                {selectedRadio && <h5 onClick = {() => setSelectedRadio("")}> cancel selection</h5> }
            </div>

            <ul className="projects-list">
                {sortedData
                .filter((projects) => projects.keywords.includes
                (selectedRadio))
                .map((projects) => (
                    <Preview projects={projects} css_size={sizeValue} key={projects.img} />
                ))}
                
            </ul>

        </div>
    ) ;
};

export default Projects;