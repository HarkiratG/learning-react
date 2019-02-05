
import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className = "Person">
    <p onClick={props.click}> I am a {props.name} and I am {props.age} years old
      <u>{props.children}</u>
    </p>
    <p> <input type="text" onChange={props.changed} value={props.name}/> </p>

    </div>
  )
};

export default person;
