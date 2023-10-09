import React, { Component } from 'react'
export default class Comments extends Component {
    state = {
      comments: [],
      isLoaded: false,
      // Add state for error handling
      error: null,
    }
  
    componentDidMount() {
      fetch(process.env.REACT_APP_API + '/api/v1/comments')
        // .then((response) => response.json())
        // Replace above with error handler
        .then((response) => {
          // Debugging: Print status code to console
          // console.log("REACT_APP_API Response Status Code: ", response.status)
          if (response.status !== '200') {
            let err = Error
            err.message = 'Invalid REACT_APP_API Response Code: ' + response.status
            this.setState({ error: err })
          }
          return response.json()
        })
        .then((json) => {
          this.setState(
            {
              comments: json,
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
      const { comments, isLoaded, error } = this.state
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
            <div className="text-lg font-bold underline decoration-dotted">Comments</div>
            <ol className="list-decimal">
              {comments?.map((m) => (
                <li key={m.id}>
                    <div className="font-bold">
                      {m.subject}
                    </div> 
                   <div>
                      {m.content}
                    </div>
                     <div className="font-light">
                      Recipe ID:
                      {m.recipeID}
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