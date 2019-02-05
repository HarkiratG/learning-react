import React, { Component } from 'react';
import './App.css';
// import Radium from 'radium';
import Person  from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1sd', name: "Example1", age: 21},
      { id: '2xzc', name: "Example2", age: 22},
      { id: '3asd', name: "Example3", age: 23}
    ],
    other_state: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIdx) => {
    /* create a copy. Change new var, then update the state
     this is to avoid modifing an immutable var */
    const newPersons = [...this.state.persons]; //same as top
    newPersons.splice(personIdx, 1);
    this.setState({persons: newPersons});
  }

  name_changed_handler = (event, id) => {
    const personIdx = this.state.persons.findIndex(each_person => {
      return each_person.id === id;
    });

    // ... takes all values of persons object and spreads it
    const person = { ...this.state.persons[personIdx] };
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIdx] = person;
    this.setState({persons: newPersons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    /* this is JS code so enclose in ' ' */
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'green';
      persons = (
        <div>
        {/* variable.map = enumerate(variable) */}
        {this.state.persons.map((each_person, idx) => {
          return <Person
          name    = {each_person.name}
          age     = {each_person.age}
          key     = {each_person.id}
          click   = {() => this.deletePersonHandler(idx)}
          // passes the changed event back to the function
          changed = {(event) => this.name_changed_handler(event, each_person.id)}/>
        })}
        </div>
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); //['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //[red, bold]
    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m Harki'))
    // main code. This is what is "returned" (rendered) to the screen
    return (
      <div className="App">
        <h1> Hi, My name is Harki! </h1>
          <p className = {classes.join(' ')}> Low amount of persons </p>
        <button
          style = {style}
          onClick={this.togglePersonHandler} > Toggle Content
        </button>
        {persons}
        <h2> Bada boom </h2>
      </div>
    );
  }
}

export default App;
