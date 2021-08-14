import "./App.css";
import StateCounter from "./StateCounter/StateCounter";
import ThisSetState from "./ThisSetState/ThisSetState";
import UseEffectIntro from "./UseEffectIntro/UseEffectIntro";

const App = () => {
  return (
    <div className="App">
      <StateCounter />
      <ThisSetState />
      <UseEffectIntro />
    </div>
  );
};

export default App;
