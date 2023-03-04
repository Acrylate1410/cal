import './App.css';
import React, { useRef } from 'react';

function App() {
  const value = useRef(0);
  const operator = useRef("=");
  const input = useRef(null);
  const full = useRef("")

  
  const ac = () => {
    input.current = null;
    operator.current = "=";
    value.current = 0;
    full.current = "";
    document.getElementById("result").innerHTML = 0
    document.getElementById("cal").innerHTML = ""
  }

  const handleInput = (e) => {
    let i = input.current;
    if (i === null) {
      i = "0";
    }    
    if (e === "+/-") {
      input.current = parseFloat(i) * -1
    } else if (e === "%") {
      input.current = i / 100;
    } else if ((e === "." && i.toString().indexOf(".") === -1) || (e !== "." && i.toString().indexOf(".") !== -1)) {
      input.current = i + e;
    } else {
      input.current = parseFloat(i + e);
    }
    document.getElementById("result").innerHTML = input.current
  }



  const calculate = (e) => {
    const v = value.current;
    const i = parseFloat(input.current)
    const o = operator.current
    let result;
    if (o === "+") {
      result = v + i;
    } else if (o === "-") {
      result = v - i ;
    } else if (o === "x") {
      result = v * i;
    } else if (o === "÷") {
      result = v / i;
    } else {
      if (i === null) {
        result = v;
      } else {
        result = i;
      }
    }
    if (!isNaN(result) && isFinite(result)) {
      value.current = Math.round(result * 100) / 100;
    }
    document.getElementById("result").innerHTML = value.current;
    
    operator.current = e;
    if (full.current === "" && input.current === null) {
      full.current = "0"
    }
    if (operator.current !== "=") {
      if (!isNaN(i)) {
        full.current += i + operator.current
      } else {
        full.current += operator.current
      }
      document.getElementById("cal").innerHTML = full.current
    } else {
      full.current = value.current
      document.getElementById("cal").innerHTML = ""
    }
    input.current = null;
  }


  

  return (
    <div className="App">
      <header>
        <div id="cal" style={{fontSize: '14px'}}>{full.current}</div>
        <div id="result">0</div>
      </header>
      <aside>
        <div id="white">
          <div className="row">
            <div className="btn" onClick={ac}>AC</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>+/-</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>%</div>
          </div>
          <div className="row">
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>7</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>8</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>9</div>
          </div>
          <div className="row">
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>4</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>5</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>6</div>
          </div>
          <div className="row">
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>1</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>2</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>3</div>
          </div>
          <div className="row">
            <div className="btn" id="btn0" onClick={(e) => handleInput(e.target.innerText)}>0</div>
            <div className="btn" onClick={(e) => handleInput(e.target.innerText)}>.</div>
          </div>
        </div>
        <div id="orange">
          <div className="btn operator" onClick={(e) => calculate(e.target.innerText)}>÷</div>
          <div className="btn operator" onClick={(e) => calculate(e.target.innerText)}>x</div>
          <div className="btn operator" onClick={(e) => calculate(e.target.innerText)}>-</div>
          <div className="btn operator" onClick={(e) => calculate(e.target.innerText)}>+</div>
          <div className="btn operator" onClick={(e) => calculate(e.target.innerText)}>=</div>
        </div>
      </aside>
    </div>
  );
}



export default App;