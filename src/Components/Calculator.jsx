import React from "react";
import { useState } from "react";
import "../Css/Calculator.css";

export function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (e) => {
    if (ops.includes(e.target.value) && ops.includes(calc.slice(-1))) {
      return;
    }

    setCalc(calc + e.target.value);

    if (!ops.includes(e.target.value)) {
      setResult(eval(calc + e.target.value).toString());
    }
  };

  const deleteBtn = () => {
    if (calc === "") {
      return;
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
    }
  };

  const clear = (e) => {
    setResult("");
    setCalc("");
  };

  return (
    <div className="gen-cont">
      <div className="cont">
        <div className="result-calc-cont">
          <div className="calc">{calc}</div>
          <div>{result ? (<div className="result">{result}</div>) : calc || <div className="result">0</div>}</div>
        </div>
        <div className="buttons-cont">
          <div>
            <button className="btn" value={1} onClick={updateCalc}>
              1
            </button>
            <button className="btn" value={2} onClick={updateCalc}>
              2
            </button>
            <button className="btn" value={3} onClick={updateCalc}>
              3
            </button>
            <button className="btn operator" value={"+"} onClick={updateCalc}>
              +
            </button>
          </div>

          <div>
            <button className="btn" value={4} onClick={updateCalc}>
              4
            </button>
            <button className="btn" value={5} onClick={updateCalc}>
              5
            </button>
            <button className="btn" value={6} onClick={updateCalc}>
              6
            </button>
            <button className="btn operator" value={"-"} onClick={updateCalc}>
              -
            </button>
          </div>
          <div>
            <button className="btn" value={7} onClick={updateCalc}>
              7
            </button>
            <button className="btn" value={8} onClick={updateCalc}>
              8
            </button>
            <button className="btn" value={9} onClick={updateCalc}>
              9
            </button>
            <button className="btn operator" value={"*"} onClick={updateCalc}>
              *
            </button>
          </div>
          <div>
            <button className="btn" value={0} onClick={updateCalc}>
              0
            </button>
            <button className="btn operator" onClick={clear}>
              Clear
            </button>
            <button className="btn operator" value={"."} onClick={updateCalc}>
              .
            </button>
            
            <button className="btn operator" value={"/"} onClick={updateCalc}>
              /
            </button>
          </div>
          <div>
            
            <button className="btn clear operator" onClick={deleteBtn}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
