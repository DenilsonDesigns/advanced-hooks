import { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(100);

  return (
    <div className="App">
      <h1
        onClick={() => {
          setState(200);
        }}
      >
        Counter: {state}
      </h1>
    </div>
  );
};

export default App;
