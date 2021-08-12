import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./../css/counter.module.scss";
const Counter = ({ min, max }) => {
  const [counter, setCounter] = useState(min);
  const [input, setInput] = useState(min);
  const [error, setError] = useState("");

  const applyCurrent = (number) => {
    const newCurrent = Math.min(number, max);
    setCounter(newCurrent);
  };

  const increaseCounter = () => {
    applyCurrent(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > min) {
      setCounter(counter - 1);
      setError("");
    } else {
      setError(`'Counter less ${min} value'`);
    }
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const inputBlur = () => {
    const inputValue = parseInt(input);
    if (inputValue && inputValue < max && inputValue > min) {
      setCounter(inputValue);
      setError("");
    } else {
      setError(`Counter is not a number between ${min} and ${max}`);
      setInput("");
    }
  };
  return (
    <div className={styles.counter}>
      <div className="counter">
        <p>
          <span>min: {min}</span>, <span>{max}</span>
        </p>
        <p className={styles.result}>{counter}</p>
        <div className={styles.buttons}>
          <button type="button" onClick={decreaseCounter} className="btn">
            -
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => changeInput(e)}
            onBlur={inputBlur}
          />
          <button type="button" onClick={increaseCounter} className="btn">
            +
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

export default Counter;
