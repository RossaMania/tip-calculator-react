import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">Tip Calculator</Typography>
        <Typography align="center" variant="h3">
          Rate the service between 1 and 10.
        </Typography>
        <Typography align="center" variant="h3">
          1 being "Horrible" and 10 being "Perfect"!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Header;
