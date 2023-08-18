import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <div className="mb-4">
        <button onClick={decreaseCounter}>-</button>
        <span className="mx-2"> {counter} </span>
        <button onClick={increaseCounter}>+</button>
      </div>
    </>
  );
}

export default Counter;
