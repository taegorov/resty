import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {

  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({})


  useEffect(() => {
    // call  our api and setPokemon;
    console.log('😎 use effect triggered', data)
    if (data.results) {
      axios.get(data.results[0].url)
        .then(response => {
          console.log(response.data)
          // let resultsUrl = response.data.results.map(pokemon => pokemon.name);
          // setData(resultsUrl);
        })
        .catch(err => console.error(err))
    }
  });  // nothing passed in


  const callApi = (requestParams) => {
    // mock output
    let data2 = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'https://pokeapi.co/api/v2/pokemon/' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };

    // use effect can listen to either of these
    setData(data2);
    setRequestParams(requestParams);
  }


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}


export default App;