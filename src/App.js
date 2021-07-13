import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

// Hooks provide access to state and lifecycle to functional react components

// RULES OF HOOKS
// 1) ALWAYS USE HOOKS INTO REACT FUNCTIONAL COMPONENTS
// 2) BE CONSISTENT WITH THEIR CALLINGS, DO NOT NEST THEM INTO OTHER FUNCTIONS,
// DO NOT PUT THEM INTO IF/ELSE BLOCKS, ALWAYS CALL THEM IN THE SAME ORDER!

function App() {
  // useState allows you to have a state variable into a functional component

  const [name, setName] = useState('Stefano')
  const [counter, setCounter] = useState(100)

  // useState is a function returning an array with two elements:
  // 1st -> the state variable you can use in your code
  // 2nd -> the function in charge of UPDATING this state variable

  // const arrayOfUseState = useState(100)
  // useState returns an array!
  // arrayOfUseState[0] --> this is the state variable
  // arrayOfUseState[1] --> this is the function in charge of updating the first element

  // state = {
  //   name: 'Stefano'
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 onClick={() => this.setState({name: 'Marcelo'})}>{name}</h1> */}
        {/* <h1 onClick={() => setName((oldName) => oldName + '_new')}>{name}</h1> */}
        <h1 onClick={() => setName(name + '_new')}>{name}</h1>
      </header>
    </div>
  )
}

export default App
