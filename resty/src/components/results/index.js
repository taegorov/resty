import React from 'react';
// import ReactJson from 'react-json-view';


function Results(props) {

  // console.log('🙄', props);

  return (
    <section>
      <input data-testid="name" value={props.data ? JSON.stringify(props.data, undefined, 2) : ''} />
    </section>
  );
}

// // add this instead of JSON stringify to make it look pretty:
// <ReactJson src={my_json_object} />

export default Results;
