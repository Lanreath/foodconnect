import React, { useState, useEffect} from 'react'
import Button from '../forms/Button'
const FORM_ENDPOINT = 'http://localhost:8080/api/v1/users/';

const Users = () => {
  const {handleSubmit, status, message} = Button({});
  const [state, setState] = useState({
    users: [],
    isLoaded: false,
    // Add state for error handling
    error: null,
  })

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/users')
        // .then((response) => response.json())
        // Replace above with error handler
        .then((response) => {
          // Debugging: Print status code to console
          // console.log("API Response Status Code: ", response.status)
          if (response.status !== '200') {
            let err = Error
            err.message = 'Invalid API Response Code: ' + response.status
            setState({ error: err })
          }
          return response.json()
        })
        .then((json) => {
          setState(
            {
              users: json,
              isLoaded: true,
            },
            // If status code is not 200 export error instead
            (error) => {
              setState({
                isLoaded: true,
                error: error,
              })
            }
          )
        })
  }, [])

// Convert this component to a functional component
    if (state.error) {
      return <div>Error: {state.error.message}</div>
      // Or print `Loading...` until JSON response
    } else if (!state.isLoaded) {
      return <p>Loading ...</p>
      // Once it is loaded print response
    } else {
      return (
        <>
          <div className="text-lg font-bold underline decoration-dotted">Recipes</div>
          <ol className="list-decimal">
            {state.users?.map((m) => (
              <li key={m.id}>
                <div className="font-bold">
                  {m.name}
                </div>
                <div className="italic">
                  {m.email}
                </div>
                <div className="italic">
                  {m.password}
                </div>
                <div className="text-light">
                  {m.id}
                </div>
                {status === 'success' && <p className="text-green-500">{message}</p>}
                {status === 'error' && <p className="text-red-500">{message}</p>}
                {status === '' && (
                  <button
                    action={FORM_ENDPOINT}
                    id={m.id}
                    method="DELETE"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}>
                    Delete
                  </button>)
                }
              </li>
            ))}
          </ol>
        </>
      )
}}

export default Users;