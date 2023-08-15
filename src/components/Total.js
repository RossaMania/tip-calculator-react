import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';


const Total = (props) => {
return (
  <Card>
    <CardContent>
      <Typography align="center" variant="h2">
        Bill: ${props.bill}
      </Typography>
      <Typography align="center" variant="h2">
        Tip: ${props.tip}
      </Typography>
      <Typography align="center" variant="h2">
        Total: ${props.total}
      </Typography>
    </CardContent>
  </Card>
);
}

export default Total;