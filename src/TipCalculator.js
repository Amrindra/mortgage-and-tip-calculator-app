import React, { useState } from "react";

const TipCalculator = () => {
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState(1);
  const [billTotal, setBillTotal] = useState("");
  const [eachPerson, setEachPerson] = useState("");
  const [totalWithTip, setTotalBillWithTip] = useState("");
  const [onlyTip, setOnlyTip] = useState("");
  const [splitTip, setSplitTip] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    let tips = tip / 100;
    let tipAmountTotal = billTotal * tips;
    let totalIncludedTip = tipAmountTotal + billTotal;
    let eachOnePay = totalIncludedTip / split;
    let getSplitTip = tipAmountTotal / split;

    setOnlyTip(formatter.format(tipAmountTotal));
    setTotalBillWithTip(formatter.format(totalIncludedTip));
    setEachPerson(formatter.format(eachOnePay));
    setSplitTip(formatter.format(getSplitTip));
  }

  return (
    <div className="tip-calculator-wrapper">
      <div className="tip-heading">
        <h1 style={{ textAlign: "center" }}>TIP CALCULATOR</h1>
      </div>

      <form className="mortgage-form" onSubmit={handleSubmit}>
        <label className="tip-label" htmlFor="mortgageAmount">
          Bill Total:
        </label>
        <input
          type="number"
          min="0"
          step="any"
          // type="range"
          required
          name="mortgageAmount"
          value={billTotal}
          onChange={(e) => setBillTotal(parseFloat(e.target.value))}
        />

        <label className="tip-label" htmlFor="">
          TIP (%):
        </label>
        <div className="tip-input">
          <div className="value">{tip}</div>
          <input
            required
            type="range"
            min="1"
            max="30"
            id="tip-slider"
            value={tip}
            onChange={(e) => setTip(parseFloat(e.target.value))}
          />
        </div>

        <label className="tip-label" htmlFor="">
          Split:
        </label>
        <div className="tip-input">
          <div className="value">{split}</div>
          <input
            type="range"
            min="1"
            max="30"
            id="tip-slider"
            value={split}
            onChange={(e) => setSplit(parseFloat(e.target.value))}
          />
        </div>

        <button>Calculate</button>
      </form>

      <div className="tip-heading">
        <h1>
          Total Included Tip: <span>{totalWithTip}</span>
        </h1>
        <h1>
          Tip Total: <span>{onlyTip}</span>, Split Tip: <span>{splitTip}</span>
        </h1>
        <h1>
          Each Person Pay: <span>{eachPerson}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default TipCalculator;
