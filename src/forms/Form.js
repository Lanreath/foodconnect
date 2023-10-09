import { useState } from "react";

function useForm({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    console.log(e.target.getAttribute('action'));
    var finalFormEndpoint = e.target.getAttribute('action');
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

    if (additionalData) {
      Object.assign(data, additionalData);
    };

    // if (data.id) {
      
    // }

    // if (data.commentID) {
    //   finalFormEndpoint = finalFormEndpoint + "/" +data.commentID;
    // } else if (data.recipeID) {
    //   finalFormEndpoint = finalFormEndpoint + "/" +data.recipeID;
    // } else if (data.userID) {
    //   finalFormEndpoint = finalFormEndpoint + "/" +data.userID;
    // } else if (data.categoryID) {
    //   finalFormEndpoint = finalFormEndpoint + "/" +data.categoryID;
    // }

    fetch(finalFormEndpoint, {
      method: e.target.getAttribute('method'),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200 || response.status !== 201 || response.status !== 204) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;