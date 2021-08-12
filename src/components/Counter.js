import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./../css/counter.module.scss";

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  changeCurrent: PropTypes.func.isRequired
};

function Counter({ min = 1, max, current, changeCurrent }) {
  const [inputStr, setInput] = useState(min);

  const applyCurrent = (number) => {
    const newCurrent = Math.max(min, Math.min(number, max));
    setInput(newCurrent);
    changeCurrent(newCurrent);
  };

  const increaseCounter = () => {
    applyCurrent(current + 1);
  };

  const decreaseCounter = () => {
    applyCurrent(current - 1);
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const inputBlur = () => {
    const inputValue = parseInt(inputStr);
    if (inputValue && inputValue < max && inputValue > min) {
      applyCurrent(inputValue);
    } else {
      setInput(min);
    }
  };
  return (
    <div className={styles.counter}>
      <div className="counter">
        <div className={styles.buttons}>
          <button type="button" onClick={decreaseCounter} className="btn">
            -
          </button>
          <input
            type="text"
            value={inputStr}
            onChange={(e) => changeInput(e)}
            onBlur={inputBlur}
          />
          <button type="button" onClick={increaseCounter} className="btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
