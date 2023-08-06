import { createTheme } from "@mui/material/styles";

const ButtonTheme = createTheme({
  palette: {
    perfect: {
      main: "#4caf50", // color for 10 - Perfect!
      contrastText: "#242105",
    },
    excellent: {
      main: "#66bb6a", // color for 9 - Excellent!
      contrastText: "#242105",
    },
    great: {
      main: "#81c784", // color for 8 - Great!
      contrastText: "#242105",
    },
    verygood: {
      main: "#ffb74d", // color for 7 - Very Good!
      contrastText: "#242105",
    },
    good: {
      main: "#ffa726", // color for 6 - Good!
      contrastText: "#242105",
    },
    okay: {
      main: "#f57c00", // color for 5 - Okay!
      contrastText: "#242105",
    },
    notgreat: {
      main: "#d32f2f", // color for 4 - Not Great!
      contrastText: "#242105",
    },
    bad: {
      main: "#f44336", // color for 3 - Bad!
      contrastText: "#242105",
    },
    terrible: {
      main: "#ce93d8", // color for 2 - Terrible!
      contrastText: "#242105",
    },
    horrible: {
      main: "#ab47bc", // color for 1 - Horrible!
      contrastText: "#242105",
    },
  },
});


export default ButtonTheme