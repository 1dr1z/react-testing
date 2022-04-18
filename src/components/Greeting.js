import React, { useState } from 'react';
import Async from './Async.js';
import Output from './Output.js';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText((prevState) => (prevState = !prevState));
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
      <Async />
    </div>
  );
};

export default Greeting;
