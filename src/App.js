import React, { Component } from 'react';
//import Radium, {StyleRoot} from "radium";
//import style from "styled-components";
import classes from './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id:"ajhajh", name: "Max", age:35},
      {id:"kjkljh", name: "Mathieu", age:34},
      {id:"khxcga", name: "Eve", age:28}
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {return person.id === id});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    })
  }

  togglePersonsHander = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({showPersons: !doesShowPersons});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    let buttonClasses = [classes.Button];

    if (this.state.showPersons) {
    
      buttonClasses.push(classes.Red);

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name = {person.name}
                age = {person.age}
                key = {person.id}
                click = {() => {this.deletePersonHandler(index)}}
                changed = {(event) => {this.nameChangedHandler(event, person.id)}}
              />
            )
          })}
        </div>
      )
    }
      
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React application.</h1>
        <p className={assignedClasses.join(" ")} >this really works!</p>
        <button 
          className={buttonClasses.join(" ")}
          onClick={this.togglePersonsHander}
          alt = {this.state.showPersons}
          >Toggle Persons
        </button>
        {persons} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React application.'));
  }
}

export default App;
