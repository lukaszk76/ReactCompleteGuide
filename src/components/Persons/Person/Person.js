import React, { Component } from 'react';
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withComponent from "../../../hoc/WithClasses";
import PropTypes from "prop-types";

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');

        return(
            <Aux>
                {this.props.isAuthenticated ? 
                    <p onClick={this.props.click} >I'm {this.props.name} and I'm {this.props.age} years old.</p>
                    : 
                    <p>Please log in</p>
                }
                <p>{this.props.children}</p>
                <input 
                    type = "text"
                    //ref =  {(inputElement) => {this.inputElement = inputElement}}
                    ref = {this.inputElementRef}
                    onChange = {this.props.changed} 
                    value = {this.props.name}
                />
            </Aux>
        )
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withComponent(Person, classes.Person);