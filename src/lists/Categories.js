import React, { useEffect, useState } from 'react'
import Button from '../forms/Button'

const FORM_ENDPOINT = process.env.REACT_APP_API + '/api/v1/categories/';

const Comments = () => {
  const { handleSubmit, status, message } = Button({});
  const [state, setState] = useState({
    categories: [],
    isLoaded: false,
    // Add state for error handling
    error: null,
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_API + '/api/v1/categories')
      // .then((response) => response.json())
      // Replace above with error handler
      .then((response) => {
        // Debugging: Print status code to console
        // console.log("REACT_APP_API Response Status Code: ", response.status)
        if (response.status !== '200') {
          let err = Error
          err.message = 'Invalid REACT_APP_API Response Code: ' + response.status
          setState({ error: err })
        }
        return response.json()
      })
      .then((json) => {
        setState(
          {
            categories: json,
            isLoaded: true,
          })
      })
      .catch((error) => {
        setState({
          isLoaded: true,
          error,
        })
      }
      )
  }, [setState]);

  // Print error if error is not null
  if (state.error) {
    return <div>Error: {state.error.message}</div>
    // Or print `Loading...` until JSON response
  } else if (!state.isLoaded) {
    return <p>Loading ...</p>
    // Once it is loaded print response
  } else {
    return (
      <>
        <div className="text-lg font-bold underline decoration-dotted">Categories</div>
        <ol className="list-decimal">
          {state.categories?.map((m) => (
            <li key={m.id}>
              <div className="font-bold">
                {m.name}
              </div>
              {status === '' && (
                <button
                  action={FORM_ENDPOINT}
                  id={m.id}
                  method="DELETE"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ol>
        {status === 'success' && <p className="text-green-500">{message}</p>}
        {status === 'error' && <p className="text-red-500">{message}</p>}
      </>
    )
  }
}

export default Comments;