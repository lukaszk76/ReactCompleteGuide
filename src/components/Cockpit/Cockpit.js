import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout( 
            ()=> alert('data stored')
            ,1000);
    }, []); //empty array means execute only once at the very beginning (componentDidMount)

    let assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    let buttonClasses = [classes.Button];
    if (props.alt) {
        buttonClasses.push(classes.Red);
    
    };

    return(
        <div className = "Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")} >this really works!</p>
            <button 
                className={buttonClasses.join(' ')}
                onClick={props.clicked}
                >Toggle Persons
            </button>
        </div>
    );
}               

export default React.memo(cockpit);