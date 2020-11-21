import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // setTimeout( 
        //     ()=> alert('data stored')
        //     ,1000);
        toggleButtonRef.current.click();
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
                ref = {toggleButtonRef} 
                className={buttonClasses.join(' ')}
                onClick={props.clicked}
                >Toggle Persons
            </button>
            <button
                onClick = {props.login}
                className={buttonClasses.join(' ')} 
                >Log in
            </button>
        </div>
    );
}               

export default React.memo(cockpit);