import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#29335C",
    },
    secondary: {
      main: "rgb(241,191,45)",
    },
    text: {
      primary: "#29335C",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Playfair Display",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h2: {
      fontFamily: "Playfair Display",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h3: {
      fontFamily: "Playfair Display",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h4: {
      fontFamily: "Playfair Display",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h5: {
      fontFamily: "Playfair Display",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    h6: {
      fontFamily: "Playfair Display",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    body1: {
      fontFamily: "Playfair Display",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    body2: {
      fontFamily: "Playfair Display",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    button: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
      fontStyle: "Black",
    },
    subtitle1: {
      fontFamily: "Playfair Display",
      fontWeight: "lighter",
      fontStyle: "normal",
    },
    subtitle2: {
      fontFamily: "Playfair Display",
      fontWeight: "lighter",
      fontStyle: "italic",
    },
  },
});
export { theme as DefaultTheme };
