import './App.css'
import { useState, useEffect } from 'react'
import Unmount from './Unmount'

// Hooks provide access to state and lifecycle to functional react components

// RULES OF HOOKS
// 1) ALWAYS USE HOOKS INTO REACT FUNCTIONAL COMPONENTS
// 2) BE CONSISTENT WITH THEIR CALLINGS, DO NOT NEST THEM INTO OTHER FUNCTIONS,
// DO NOT PUT THEM INTO IF/ELSE BLOCKS, ALWAYS CALL THEM IN THE SAME ORDER!

function App(props) {
  // useState allows you to have a state variable into a functional component
  // useEffect will mimic componentDidMount, componentDidUpdate, componentWillUnmount

  const [name, setName] = useState('Stefano')
  const [counter, setCounter] = useState(100)

  // this is the componentDidMount shape
  useEffect(
    () => {
      console.log('just like componentDidMount')
      // you want to do here fetches, expensive operations
    },
    []
    // every value you put in the dependency array will be checked
    // every time one of the values you put here changes, the function will be re-executed
  )

  // this is the componentDidUpdate shape
  useEffect(() => {
    console.log('re-executed every time the name changes')
    setCounter(counter + 1)
  }, [name, props.murilo])
  // this will execute every time name changes

  useEffect(() => {
    console.log('this will be called EVERY time a change is detected, in the state or in the props')
  })

  // this is the componentWillUnmount shape
  useEffect(() => {
    // for launching some code just on component unmounting, return a function
    return () => {
      // this is like componentWillUnmount
      console.log('about to be unmounted')
    }
  }, [])

  // const strivers = ['Raissa', 'Magdalena', 'Luna']

  // const [name1, name2, name3] = strivers

  // console.log(name1)

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

  //

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 onClick={() => this.setState({name: 'Marcelo'})}>{name}</h1> */}
        {/* <h1 onClick={() => setName((oldName) => oldName + '_new')}>{name}</h1> */}
        <h1 onClick={() => setName('Sarath')}>{name}</h1>
        {name === 'Stefano' && <Unmount />}
      </header>
    </div>
  )
}

export default App
