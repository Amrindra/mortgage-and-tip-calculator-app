import MortgageCalculator from "./MortgageCalculator";
import "./styles.css";
import TipCalculator from "./TipCalculator";

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>
          Use my mortgage calculator to estimate your monthly mortgage payment
          and Tip Calculator to calculate how much you for each person.
        </h1>
      </div>
      <div className="app-wrapper">
        <MortgageCalculator />
        <TipCalculator />
      </div>
    </div>
  );
}
