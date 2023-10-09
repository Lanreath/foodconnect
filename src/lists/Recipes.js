import React, { Component } from 'react'
export default class Recipes extends Component {
    state = {
      recipes: [],
      isLoaded: false,
      // Add state for error handling
      error: null,
    }
  
    componentDidMount() {
      fetch('http://localhost:8080/api/v1/recipes')
        // .then((response) => response.json())
        // Replace above with error handler
        .then((response) => {
          // Debugging: Print status code to console
          // console.log("API Response Status Code: ", response.status)
          if (response.status !== '200') {
            let err = Error
            err.message = 'Invalid API Response Code: ' + response.status
            this.setState({ error: err })
          }
          return response.json()
        })
        .then((json) => {
          this.setState(
            {
              recipes: json,
              isLoaded: true,
            },
            // If status code is not 200 export error instead
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              })
            }
          )
        })
    }
  
    render() {
      const { recipes, isLoaded, error } = this.state
      // Print error if error is not null
      if (error) {
        return <div>Error: {error.message}</div>
        // Or print `Loading...` until JSON response
      } else if (!isLoaded) {
        return <p>Loading ...</p>
        // Once it is loaded print response
      } else {
        return (
          <>
            <div className="text-lg font-bold underline decoration-dotted">Recipes</div>
            <ol className="list-decimal">
              {recipes?.map((m) => (
                <li key={m.id}>
                    <div className="font-bold">
                      {m.name}
                    </div> 
                    <div className="italic">
                      Ingredients: 
                      {m.ingredients}
                    </div>
                    <div>
                      Steps: 
                      {m.steps}
                    </div>
                    <div className="font-light">
                      Category ID: 
                      {m.categoryID}
                    </div>
                    <div className="font-light">
                      User ID: 
                      {m.userID}
                    </div>
                </li>
              ))}
            </ol>
          </>
        )
      }
    }
  }