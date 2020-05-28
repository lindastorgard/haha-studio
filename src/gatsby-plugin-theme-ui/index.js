export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#0C1428",
    secondary: "#F1F1EF",
    details: "#545454",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      m: 0,
    },
    h1: {
      fontFamily: "heading",
      fontSize: [4, 6],
      lineHeight: "heading",
      fontWeight: "light",
      m: 0,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: 4,
      m: 0,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: 3,
      m: 0,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "body",
      fontSize: 3,
      m: 0,
    },
    // a: {
    //   display: "inline-block",
    //   maxWidth: "170px",
    //   position: "relative",
    //   textDecoration: "none",
    //   fontFamily: "body",
    //   fontWeight: "body",
    //   fontSize: 1,
    //   color: "text",
    //   textTransform: "capitalize",
    //   paddingX: "10px",
    //   textAlign: "center",
    //   zIndex: 2,
    //   "::after": {
    //     content: '" "',
    //     position: "absolute",
    //     zIndex: -1,
    //     display: "block",
    //     width: "100%",
    //     height: "2px",
    //     backgroundColor: "highlight",
    //     transition: "0.2s",
    //     ml: "-10px",
    //     marginTop: "5px",
    //   },
    //   ":hover": {
    //     color: "text",
    //     "::after": {
    //       height: "40px",
    //       mt: "-33px",
    //     },
    //   },
    // },
  },
};
