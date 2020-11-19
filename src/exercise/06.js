// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputEl?.current?.value)
  }

  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const inputEl = useRef(null)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input ref={inputEl} onChange={handleChange} type="text" id="username" />
      {error && (
        <p role="alert" style={{color: 'red'}}>
          {error}
        </p>
      )}
      <br />
      <label htmlFor="username2">Username (controlled):</label>
      <input
        value={username}
        onChange={e => setUsername(e.target.value.toLowerCase())}
        type="text"
        id="username2"
      />
      <br />
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
