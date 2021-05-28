import React, {useState,useEffect} from 'react';

const Description = (props) => {
    const [b_exit_press, setBexit] = useState(false);
    const [b_left_press, setBleft] = useState(false);
    const [b_right_press, setBright] = useState(false);

    const [tabView, setTabView] = useState("visible");

    const {projects} = props;

    useEffect(() =>{
        
        // b_exit_press?setTabView("hidden"):"";
        if(b_exit_press){
            console.log("pression sur le bouton exit");
            setTabView("hidden");
            setBexit(false);
        }

        if(b_left_press){
            console.log("pression sur le bouton left");
            setBleft(false);
        }

        if(b_right_press){
            console.log("pression sur le bouton right");
            setBright(false);
        }

    }, [b_exit_press,b_left_press,b_right_press]);


    return (
        <div className="desc_container" style={{visibility: tabView}}>
            <div className="button" id="button_L" onClick={()=> setBleft(true)}></div>
            <div className="button" id="button_R" onClick={()=> setBright(true)}></div>
            <div className="button" id="button_exit" onClick={()=> setBexit(true)}></div>
            
        </div>
    );
};

export default Description;