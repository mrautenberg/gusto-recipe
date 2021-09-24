import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FA4A0C",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e5e5e5",
    },
  },
})

export default theme
