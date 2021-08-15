import "./App.css";
import LifeCycleOfHooks from "./LifeCycleOfHooks/LifeCycleOfHooks";
import StateCounter from "./StateCounter/StateCounter";
import ThisSetState from "./ThisSetState/ThisSetState";
import UseEffectDepArray from "./UseEffectDepArray/UseEffectDepArray";
import UseEffectIntro from "./UseEffectIntro/UseEffectIntro";

const App = () => {
  return (
    <div className="App">
      <StateCounter />
      <ThisSetState />
      <UseEffectIntro />
      <UseEffectDepArray />
      <LifeCycleOfHooks />
    </div>
  );
};

export default App;
