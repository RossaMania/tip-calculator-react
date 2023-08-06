import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import ButtonTheme from "../themes/ButtonTheme";


const ServiceRating = (props) => {
  const ratings = [
    { value: 1, label: "1 - Horrible!", color: "horrible" },
    { value: 2, label: "2 - Terrible!", color: "terrible" },
    { value: 3, label: "3 - Bad!", color: "bad" },
    { value: 4, label: "4 - Not Great!", color: "notgreat" },
    { value: 5, label: "5 - Okay!", color: "okay" },
    { value: 6, label: "6 - Good!", color: "good" },
    { value: 7, label: "7 - Very Good!", color: "verygood" },
    { value: 8, label: "8 - Great!", color: "great" },
    { value: 9, label: "9 - Excellent!", color: "excellent" },
    { value: 10, label: "10 - Perfect!", color: "perfect" },
  ];

const getButtonStyle = (color) => {
  return {
    backgroundColor: ButtonTheme.palette[color].main,
    color: ButtonTheme.palette[color].ContrastText,
  };
};

  return (
    <ThemeProvider theme={ButtonTheme}>
      {ratings.map((rating) => (
        <div key={rating.value}>
          <Button
            name="service"
            value={rating.value}
            variant="contained"
            style={getButtonStyle(rating.color)}
            onClick={props.handleServiceChange}
          >
            {rating.label}
          </Button>
        </div>
      ))}
    </ThemeProvider>
  );
};

export default ServiceRating
