import { useState } from "react";

function useButton({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    var finalButtonEndpoint = e.target.getAttribute('action');
    const id = e.target.getAttribute('id');
    finalButtonEndpoint = finalButtonEndpoint + id;

    fetch(finalButtonEndpoint, {
      method: e.target.getAttribute('method'),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: '{"id":' + id + '}',
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("Deleted!");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useButton;