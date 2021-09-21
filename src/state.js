import React, { useState } from 'react';

function State() {
  //init State
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState('');

  //Create Function Add
  function Add() {
    return setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    return setCounter(counter - 1);
  }

  function Greeting() {
    setGreeting('Halo batch 26');
  }

  return (
    // Code Inside div
    <div>
      <p>
        If you click the add button it wall increase by one, vice versa if you
        click the less button it will descrease by one
      </p>

      <h2>{counter}</h2>

      <h1>{greeting}</h1>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

export default State;
