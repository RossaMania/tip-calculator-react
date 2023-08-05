import React from "react";

const Total = (props) => {
return (
  <div>
    <h2>Bill: ${props.bill}</h2>
    <h2>Tip: ${props.tip}</h2>
    <h2>Total: ${props.total}</h2>
  </div>
);
}

export default Total;