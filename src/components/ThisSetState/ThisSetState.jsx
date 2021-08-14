import React, { useState } from "react";

const ThisSetState = () => {
  // this is the method of re-creating the old this.setState pattern from React
  // not entirely recommended for most use cases.
  const [state, _setState] = useState({
    counter: 0,
    counter2: 10,
  });

  const setState = (newState) => {
    _setState((oldState) => {
      return {
        ...oldState,
        ...newState,
      };
    });
  };

  return (
    <div
      className="StateCounter"
      onClick={() => {
        setState({
          counter: state.counter + 1,
        });
      }}
    >
      <h1>Re-create this.setState({})</h1>
      <h3>Counter1: {state.counter}</h3>
      <h3>Counter2: {state.counter2}</h3>
      <hr />
    </div>
  );
};

export default ThisSetState;
