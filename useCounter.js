import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;

    // setCounter(counter - value);
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    //Properties
    counter,
    //Method
    increment,
    decrement,
    reset,
  };
};
