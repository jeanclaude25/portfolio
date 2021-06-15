import React from 'react';
import Video from './Video';

class Description extends React.Component {


        constructor (props){
                            super(props)
                            this.activeElement = props
                            }


    title(a){ console.log(a);let title;try{title = a.name}catch(e){title=""};return title}
    info(a){ let infos;try{infos = a.description.infos;}catch(e){infos=""};return infos}
    images(a){ let images;try{images = a.description.images;}catch(e){images = ""};
        let liste = [];
        try{
        for(var i in a.description.images){
            liste.push(a.description.images[i]);
            };}catch(e){liste.push("");}

        return liste
    }
    imagesfree(a){ let images;try{images = a.description.imfreeext;}catch(e){images = ""};
        let liste = [];
        try{
        for(var i in a.description.imfreeext){
            liste.push(a.description.imfreeext[i]);
            };}catch(e){liste.push("");}

        return liste
    }


    render() {
        const activeElement = this.activeElement.props;
        console.log(activeElement.description.videos);
        return <div className="description" id="desc_panel">

                <div className="title"><h1>{this.title(activeElement)}</h1></div>
                <div className="explication"><p>{this.info(activeElement)}</p></div>
                <hr/>
                <div className="images">
                    {this.images(activeElement).map((im)=>{
                    return(
                        
                         <img src={activeElement.path+
                            activeElement.description.path+
                            im+
                            activeElement.description.extension} key={im}/>
                    )
                    })}
                </div>
                <div className="imagesFreeExt">
                    {this.imagesfree(activeElement).map((imfree)=>{
                    return(
                        
                         <img src={activeElement.path+
                            activeElement.description.path+
                            imfree} key={imfree}/>
                    )
                    })}
                </div>
                
                 {activeElement.description.videos && <Video props={activeElement} key={activeElement.videos}/>}
                 {/* {activeElement.description.gifs && } */}
                    <p>.</p><p></p>

                {activeElement.link!=undefined && <a href = {activeElement.path+activeElement.link} target ="viewer"><img src= {activeElement.path+activeElement.imgApp} key={activeElement.imgApp}/></a> }
                {/* {activeElement.link==undefined && <img src= {activeElement.img} />} */}
                

                {/* <iframe src={activeElement.link} sandbox=''/> */}
                
                
                
                {/* <div className="button" id="button_L" onClick={()=> press_on_left()}></div>
                <div className="button" id="button_R" onClick={()=> press_on_right()}></div> */}
                                                            
            </div>
    };
};

export default Description;