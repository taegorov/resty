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

export default Results;
