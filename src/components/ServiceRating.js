import React from "react";

const ServiceRating = (props) => {
  const ratings = [
    { value: 1, label: "1 - Horrible!" },
    { value: 2, label: "2 - Terrible!" },
    { value: 3, label: "3 - Bad!" },
    { value: 4, label: "4 - Not Great!" },
    { value: 5, label: "5 - Okay!" },
    { value: 6, label: "6 - Good!" },
    { value: 7, label: "7 - Very Good!" },
    { value: 8, label: "8 - Great!" },
    { value: 9, label: "9 - Excellent!" },
    { value: 10, label: "10 - Perfect!" },
  ];

  return (
    <div>
      {ratings.map((rating) => (
        <div key={rating.value}>
          <button
            name="service"
            value={rating.value}
            onClick={props.handleServiceChange}
          >
            {rating.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceRating;
