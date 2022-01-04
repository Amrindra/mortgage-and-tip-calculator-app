import React, { useState } from "react";

function MortgageCalculator() {
  const [mortgageAmount, setMoregageAmount] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interest, setInterest] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function newFunction() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

  const formatter = newFunction();

  function handleClick(e) {
    e.preventDefault();

    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

    let principle = mortgageAmount - downPayment;
    if (interest === 0) {
      alert("Sorry, Interest Rate cannot be 0.");
    } else {
      let rate = interest / 100;
      var interestRate = rate / 12;
    }
    let yearOfLoan = 12 * loanTerm;
    let numerator = principle * interestRate * (1 + interestRate) ** yearOfLoan;
    let denominator = (1 + interestRate) ** yearOfLoan - 1;
    let monthlyPayment = numerator / denominator;

    setMonthlyPayment(formatter.format(monthlyPayment));
  }

  return (
    <div className="mortgage-cal-loan">
      <div className="mortgage-heading">
        <h1 style={{ textAlign: "center" }}>MORTGAGE CALCULATOR</h1>
      </div>

      <form className="mortgage-form" onSubmit={handleClick}>
        <label className="mortgage-lable" htmlFor="mortgageAmount">
          Mortgage Amount:
        </label>
        <input
          type="number"
          // type="range"
          min="0"
          step="any"
          required
          name="mortgageAmount"
          value={mortgageAmount}
          onChange={(e) => setMoregageAmount(parseFloat(e.target.value))}
        />

        <label className="mortgage-lable" htmlFor="">
          Down Payment:
        </label>
        <input
          required
          type="number"
          min="0"
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
        />

        <label className="mortgage-lable" htmlFor="">
          Loan Terms (years):
        </label>
        <input
          required
          type="number"
          min="0"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        />

        <label className="mortgage-lable" htmlFor="">
          Interest Rate (%):
        </label>
        <input
          required
          type="number"
          min="0"
          step="any"
          value={interest}
          onChange={(e) => setInterest(parseFloat(e.target.value))}
        />

        {/* <input type="submit" value="Calculate" /> */}
        <button>Calculate</button>
      </form>
      <div className="mortgage-heading">
        <h1>
          Your Estimate Payment: <span>{monthlyPayment}</span>
        </h1>
      </div>
    </div>
  );
}

export default MortgageCalculator;
