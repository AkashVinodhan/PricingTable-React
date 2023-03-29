import "./App.css";
import Card from "./Card";
import features from "./features.json";
const { freePlan, plusPlan, proPlan } = features;

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card tier="Free" planBenefits={freePlan} price={0} />
          <Card tier="Plus" planBenefits={plusPlan} price={9} />
          <Card tier="Pro" planBenefits={proPlan} price={49} />
        </div>
      </div>
    </section>
  );
}

export default App;
