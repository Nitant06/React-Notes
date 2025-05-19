import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    // setCounter(prevCounter=>counter+1);
    // setCounter(prevCounter=>counter+1);
    // setCounter(prevCounter=>counter+1);
    // setCounter(prevCounter=>counter+1);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Hooks in React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
