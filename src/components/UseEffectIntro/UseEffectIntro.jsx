import React, { useEffect, useState } from "react";

const UseEffectIntro = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // with no dependency array, this will run every render cycle
  useEffect(() => {
    console.log("something changed");
  });

  return (
    <div className="StateCounter">
      <h1>UseEffect Intro</h1>
      <h3 onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </h3>
      <h3 onClick={() => setCounter2((counter) => counter + 1)}>
        Counter2: {counter2}
      </h3>
      <hr />
    </div>
  );
};

export default UseEffectIntro;
