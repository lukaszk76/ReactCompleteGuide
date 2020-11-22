import React, { Component } from 'react';
//import Radium, {StyleRoot} from "radium";
//import style from "styled-components";
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClasses from '../hoc/WithClasses';
import Aux from '../hoc/Aux';
import AuthContext from "../context/auth-context"

class App extends Component {
  state = {
    persons: [
      {id:"ajhajh", name: "Max", age:35},
      {id:"kjkljh", name: "Mathieu", age:34},
      {id:"khxcga", name: "Eve", age:28}
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  loginHandler = () => {
    
    let isLogged = this.state.authenticated;
    this.setState({authenticated: !isLogged});
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
    
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        />
      )
    }
    
    return (
      <Aux>
        <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
        }}>
        
          <button onClick={() => {this.setState({showCockpit: false})}}>Hide Cockpit</button>
        
          {this.state.showCockpit ?  
          <Cockpit
            title = {this.props.appTitle}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHander}
            login = {this.loginHandler}
            alt = {this.state.showPersons}  
          />
          : null}
        
          {persons} 
        
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React application.'));
  }
}

export default withClasses(App, classes.App);
