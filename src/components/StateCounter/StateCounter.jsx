import { useState } from "react";

const StateCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="StateCounter"
      onClick={() => {
        // when nextState is depending on previous state,
        // use prevState like below, to make sure
        // React uses most recent value of piece of state.
        // setCounter((prevCount) => prevCount + 1);
        // example:
        // setTimeout(() => {
        //   setCounter(counter + 1);
        // }, 1000);
        // If theres some kind of lag like above (artificially created using setTimeout.)
        // ***
        // However, by putting a func inside the setter, we can use the most recent value of
        // the state object. Example:
        setCounter((prevCount) => prevCount + 1);
        setTimeout(() => {
          setCounter((prevCount) => prevCount + 1);
        }, 1000);
        // The above will initially increment counter by 1 (0->1), then 1 second later
        // will increment another 1 (1->2)
      }}
    >
      <h1>State Counter</h1>
      <h3>Counter: {counter}</h3>
      <hr />
    </div>
  );
};

export default StateCounter;
