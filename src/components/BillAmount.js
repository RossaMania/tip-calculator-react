import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const BillAmount = (props) => {
  return (
    <TextField
      label="Bill Amount"
      id="outlined-bill"
      sx={{ m: 1, width: "25ch" }}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      name="bill"
      onChange={props.handleBillChange}
      value={props.bill}
      variant="outlined"
    />
  );
};

export default BillAmount;