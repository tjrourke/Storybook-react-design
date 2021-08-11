const baseFont = {
  family: "'Lato', sans-serif",
  fontSize: "0.9rem"
};

// const sizes = {
//     small: {
//         "font-size": "80%",
//         "font-weight": "400"
//     }
// };

const colors = {
  primary: "#005695",
  secondary: "#F5F5F5",
  tertiary: "#979797",
  quaternary: "#EFEFEF",
  actionForward: "#469600",
  actionUpdate: "#C68200",
  attention: "#d4edff",
  noteText: "#666666",
  lightBackground: "F3F9FD",
  active: "#605F61",
  inactive: "#cccccc"
};

const margins = {
  bottom: "0.5rem"
};

const headings = {
  marginTop: 0,
  marginBottom: margins.bottom,
  fontFamily: baseFont.family,
  fontWeight: 500,
  lineHeight: 1.2
};

const headingsStrings = {
  marginTop: headings.marginTop.toString(),
  marginBottom: headings.marginBottom,
  fontFamily: headings.fontFamily,
  fontWeight: headings.fontWeight.toString(),
  lineHeight: headings.lineHeight.toString()
};

const h1 = { ...headingsStrings, color: colors.primary, fontSize: "2.25rem" };

const h2 = { ...headingsStrings, color: colors.primary, fontSize: "1.8rem" };

const h3 = { ...headingsStrings, color: colors.primary, fontSize: "1.575rem" };

const portalHeading = {
  ...headingsStrings,
  color: colors.primary,
  fontSize: "2.25rem",
  textTransform: "uppercase"
};

const headers = {
  portalHeading: portalHeading,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: Object.assign({}, headingsStrings, {
    color: colors.primary,
    fontSize: "1.35rem"
  }),
  h5: Object.assign({}, headingsStrings, {
    color: colors.primary,
    fontSize: "1.125rem"
  }),
  h6: Object.assign({}, headingsStrings, {
    color: colors.primary,
    fontSize: "0.9rem"
  })
};

const formCommon = {
  margin: 0,
  "font-family": baseFont.family
  // "font-size": inherit,
  // "line-height": inherit,
};

const buttonCommon = {
  fontFamily: formCommon.fontFamily,
  margin: formCommon.margin.toString(),
  marginBottom: margins.bottom.toString(),
  overflow: "visible",
  textTransform: "none",
  webkitAppearance: "button"
};

const formInput = {
  fontFamily: formCommon.fontFamily,
  margin: formCommon.margin.toString(),
  marginBottom: margins.bottom.toString(),
  overflow: "visible"
};

const selectInput = {
  textTransform: "none",
  wordWrap: "normal"
};

// const containers = {
//     width: "100%",
//     paddingRight: "15px",
//     paddingLeft: "15px",
//     marginRight: "auto",
//     marginLeft: "auto"
// };

const formElements = {
  button: Object.assign({}, buttonCommon),
  submitButton: Object.assign({}, buttonCommon),
  primaryButton: Object.assign({}, buttonCommon),
  secondaryButton: Object.assign({}, buttonCommon),
  input: Object.assign({}, formInput),
  dateInput: Object.assign({}, formInput),
  emailInput: Object.assign({}, formInput),
  feinInput: Object.assign({}, formInput),
  passwordInput: Object.assign({}, formInput),
  phoneNumberInput: Object.assign({}, formInput),
  postalCodeInput: Object.assign({}, formInput),
  checkboxInput: Object.assign({}, formInput, {
    "box-sizing": "border-box",
    padding: "0"
  }),
  radioInput: Object.assign({}, formInput, {
    "box-sizing": "border-box",
    padding: "0"
  }),
  // decimal2: Object.assign({}, formInput),
  dropDown: selectInput
};

const accordionSidebar = {
  ".card-header span.active i": {
    color: colors.active
  },
  ".card-header span.inActive i": {
    color: colors.inactive
  },
  ".card-header": {
    fontFamily: "'Lato-Regular', 'Lato', sans-serif",
    fontWeight: 400,
    color: colors.primary,
    fontSize: "16px",
    height: "40px",
    width: "250px"
  }
};

export const DefaultTheme = {
  "$border-radius-sm": "3px",
  "$border-radius": "3px",
  "$border-radius-lg": "3px",
  "$font-family-base": baseFont.family,
  $primary: colors.primary,
  $secondary: colors.secondary,
  $tertiary: colors.tertiary,
  $quaternary: colors.quaternary,
  "$action-forward": colors.actionForward, // action color forward
  "$action-update": colors.actionUpdate, // action color apply/update
  $attention: colors.attention,
  $fontSizeBase: baseFont.fontSize,
  $tooltipColor: colors.primary,
  $tooltipBg: colors.secondary,
  $noteText: colors.noteText,
  $lightblueBackground: colors.lightBackground,

  accordionSidebar: accordionSidebar,
  forms: formElements,
  headings: headers
};
