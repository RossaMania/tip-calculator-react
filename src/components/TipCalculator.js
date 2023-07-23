import React, { useState } from "react";
import Header from "./Header";
import BillAmount from "./BillAmount";
import ServiceRating from "./ServiceRating";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(5);
  const [tip, setTip] = useState(0);

  const handleBillChange = (event) => {
    setBill(Number(event.target.value));
    console.log(bill);
  };

   const handleServiceChange = (event) => {
    event.preventDefault();
     setService(Number(event.target.value));
     console.log(service);
     calculateTip();
   };

  const calculateTip = () => {

    let X;
    if (service <= 3) {
      X = 0.15;
    } else if (service >= 4 && service <= 5) {
      X = 0.18;
    } else if (service >= 6 && service <= 7) {
      X = 0.21;
    } else if (service === 8) {
      X = 0.25;
    } else if (service >= 9 && service <= 10) {
      X = 0.3;
    }

    const tipAmount = Number((bill * X).toFixed(2));
    setTip(tipAmount);
    console.log(tipAmount);

  };

  const calculateTotal = () => {
    const total = bill + tip;
    console.log(total);
    return total;
  };

  return (
    <div>
      <Header />
      <BillAmount bill={bill} handleBillChange={handleBillChange} />
      <ServiceRating handleServiceChange={handleServiceChange} />
      <div>
        <button type="Submit" id="submit" onClick={calculateTotal}>
          Calculate Total
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
