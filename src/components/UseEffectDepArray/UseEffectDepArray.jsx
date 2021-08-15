import React, { useEffect, useState } from "react";

const UseEffectDepArray = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [stateObj] = useState({ hello: 1 });

  //   const object1 = { hello: 1 };

  useEffect(() => {
    console.log("counter changed");
    return () => {
      console.log("cleanup");
    };
  }, [counter, stateObj]); // Dep arrays are compared in React using ===,
  // this means that you cannot use an object. JS will look to the memory address
  // when comparing objects, meaning it won't compare values, and each re-render it
  // will consider 'object1' to have changed as the memory address is different.

  // If we manage the object in a state variable, we won't get that problem in the same
  // way as we have with object1, React will not create a new object (with a new memory address)
  // in this case.

  return (
    <div className="StateCounter">
      <h1>UseEffect Dependency Array</h1>
      <h3 onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </h3>
      <h3 onClick={() => setCounter2((counter) => counter + 1)}>
        Counter 2: {counter2}
      </h3>
      <hr />
    </div>
  );
};

export default UseEffectDepArray;
