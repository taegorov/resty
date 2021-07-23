import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


// === initial state === //
const initialState = {
  data: {},
  requestParams: {},
  history: [],
  isLoading: false,
}


// === reducer === //
function reducer(state = initialState, action) {

  switch (action.type) {
    case 'UPDATE_REQUEST_PARAMS':
      return { ...state, requestParams: { ...action.payload } };

    case 'ASSIGN_DATA':
      return { ...state, data: { ...action.payload } };

    case 'UPDATE_HISTORY':
      return { ...state, data: [...action.payload] };

    case 'TOGGLE_LOAD':
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  };
}



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const callApi = async (requestParamsObject) => {
    // try {
    const response = await axios(requestParamsObject);

    const action = {
      type: 'ASSIGN_DATA',
      payload: response,
    };

    dispatch(action);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  useEffect(() => {
    if (state !== {}) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form setRequestParams={dispatch} />
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
}



export default App;