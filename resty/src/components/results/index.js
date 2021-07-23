import React from 'react';
// import ReactJson from 'react-json-view';


function Results(props) {

  // console.log('🙄', props);

  return (
    <section>
      <pre data-testid="name">
        {props.data ? JSON.stringify(props.data, undefined, 2) : 'loading'}
      </pre>
    </section>
  );
}

// // add this instead of JSON stringify to make it look pretty:
// <ReactJson src={my_json_object} />

export default Results;
