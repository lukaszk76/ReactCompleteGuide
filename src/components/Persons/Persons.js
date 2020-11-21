import React, { Component } from "react";
import Person from "./Person/Person"

class Persons extends Component {
  
  // static getDerivedStateFromProps(props, state) {
    
  //   console.log('[Persons.js] getDerivedStateFromProps');

  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if ((nextProps.persons !== this.props.persons) || 
        (nextProps.isAuthenticated !== this.props.isAuthenticated)){
      return true;
    } else {
      return false;
    }
    // return true;
    
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmouny');
  }

  render() {
    
    console.log('[Persons.js]  rendering...')

    return this.props.persons.map((person, index) => {
      return (
        <div key = {person.id}>
          <br/>
          <Person
            name = {person.name}
            age = {person.age}
            click = {() => {this.props.clicked(index)}}
            changed = {(event) => {this.props.changed(event, person.id)}}
            isAuthenticated = {this.props.isAuthenticated}
          />
        </div>
      )
    });
  }
}

export default Persons;