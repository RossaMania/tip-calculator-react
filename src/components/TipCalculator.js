import React, { useEffect, useState } from "react";
import Header from "./Header";
import BillAmount from "./BillAmount";
import ServiceRating from "./ServiceRating";
import Total from "./Total";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(10);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBillChange = (event) => {
    setBill(Number(event.target.value));
    console.log(bill);
  };

  const handleServiceChange = (event) => {
    event.preventDefault();
    setService(Number(event.target.value));
    console.log(service);
    calculateTip();
    calculateTotal();
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
    console.log(tip);
  };

  const calculateTotal = () => {
    const totalAmount = bill + tip;
    setTotal(totalAmount);
    console.log(total);
  };

  useEffect(() => {
    calculateTip();
    calculateTotal();
  }, [bill, service, calculateTip, calculateTotal]); // Run the effect whenever `bill` or `service` changes

  return (
    <div>
      <Header />
      <Total bill={bill} tip={tip} total={total} />
      <BillAmount bill={bill} handleBillChange={handleBillChange} />
      <ServiceRating handleServiceChange={handleServiceChange} />
    </div>
  );
};

export default TipCalculator;
