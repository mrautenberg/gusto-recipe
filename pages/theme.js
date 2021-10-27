import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#FA4A0C",
		},
		secondary: {
			main: "#2e2b2b",
		},
		background: {
			default: "#e5e5e5",
		},
	},
	typography: {
		body1: {
			fontSize: "1.125rem",
		},
		h3: {
			fontSize: "2.5rem",
			fontWeight: "bold",
		},
	},

})

export default theme
