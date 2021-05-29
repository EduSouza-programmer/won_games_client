import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: amber[500],
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          button: {
            cursor: "pointer",
          },
        },
      },
    },
  })
);
