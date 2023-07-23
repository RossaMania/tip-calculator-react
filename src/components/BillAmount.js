import React from "react";

const BillAmount = (props) => {
  return (
    <div>
      <div>
        <h5>Bill</h5>
        <p>Type the bill amount here.</p>
        <label htmlFor="bill">$</label>
        <input type="text" id="bill" name="bill" value={props.bill} onChange={props.handleBillChange} />
      </div>
    </div>
  );
};

export default BillAmount;