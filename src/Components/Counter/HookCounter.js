import React, { useState } from "react";
import "../Counter/Counter.css";
import { Button } from "react-bootstrap";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="countdiv">
        <div className="counterbuttons">
          <i
            class="fa-solid fa-circle-plus"
            onClick={() => setCount(count + 1)}
          ></i>

          <h2>Counter : {count}</h2>
          <i
            class="fa-solid fa-circle-minus"
            onClick={() => (count > 0 ? setCount(count - 1) : null)}
          ></i>
        </div>
      </div>
      <Button
        style={{ width: "80px" }}
        variant="outline-warning"
        onClick={() => setCount(count * 0)}
      >
        Reset
      </Button>{" "}
    </>
  );
};

export default HookCounter;
