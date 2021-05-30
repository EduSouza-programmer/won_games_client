import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const fontPoppins300 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url('/fonts/poppins-v15-latin-300.woff2') format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
} as const;

const fontPoppins400 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
} as const;

const fontPoppins600 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url('/fonts/poppins-v15-latin-300.woff2') format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
} as const;

export default responsiveFontSizes(
  createMuiTheme({
    gridLayout: {
      container: "130rem",
      gutter: "3.2rem",
    },
    typography: {
      fontFamily: `"Poppins","Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"`,
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightBold: 600,
      fontSizes: {
        xsmall: "1.2rem",
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        xlarge: "2.0rem",
        xxlarge: "2.8rem",
        huge: "5.2rem",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#F231A5",
      },
      secondary: {
        main: "#3CD3C1",
      },
      mainBg: {
        main: "#06092B",
      },
      lightBg: {
        main: "#F2F2F2",
      },
      white: {
        main: "#FAFAFA",
      },
      black: {
        main: "#030517",
      },
      lightGray: {
        main: "#EAEAEA",
      },
      gray: {
        main: "#8F8F8F",
      },
      darkGray: {
        main: "#2E2F42",
      },
      red: {
        main: "#FF6347",
      },
    },
    spacings: {
      xxsmall: "0.8rem",
      xsmall: "1.6rem",
      small: "2.4rem",
      medium: "3.2rem",
      large: "4.0rem",
      xlarge: "4.8rem",
      xxlarge: "5.6rem",
    },
    zIndex: {
      base: 10,
      menu: 20,
      overlay: 30,
      modal: 40,
      alwaysOnTop: 50,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          button: {
            cursor: "pointer",
          },
          "@font-face": [fontPoppins300, fontPoppins400, fontPoppins600],
          body: {
            fontFamily: `"Poppins","Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"`,
          },
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
        },
      },
    },
  })
);
