import React, { useState } from 'react';

import './form.scss';

function Form({ setRequestParams }) {

  let [method, setMethod] = useState('');
  let [url, setUrl] = useState('');


  const handleMethod = (e) => {
    e.preventDefault();
    setMethod(e.target.id);
  }

  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      method,
      url,
    };

    const action = {
      type: 'UPDATE_REQUEST_PARAMS',
      payload: formData,
    }
    setRequestParams(action);
  }


  return (
    <>
      <form>
        <label >
          <span>URL: </span>
          <input data-testid="input" onChange={handleUrl} name='url' type='text' />
          <button data-testid="button" onClick={handleSubmit} type="submit">Submit!</button>
        </label>
        <label onClick={handleMethod} className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;
