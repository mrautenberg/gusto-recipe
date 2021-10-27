import { makeStyles } from "@mui/styles"

import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "next/link"
import Layout from "@/components/Layout/Layout"

const useStyles = makeStyles({
	header1: {
    marginBottom: "1.5rem",
    marginTop: "-1.5rem"
  },
  headers: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "bold"
  },
	contentContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	buttonLink: {
		textDecoration: "none",
		color: "black",
	},
})

export default function NotFoundPage() {
	const classes = useStyles()

	return (
		<Layout title="Page Not Found">
			<>
				<div className={classes.contentContainer}>
					<SearchIcon sx={{ fontSize: 200, marginBottom: "40px" }} />
					<Typography 
						variant="h3" 
						component="h1"
						className={classes.header1}
				  >
						Not found
					</Typography>
					<Typography
						variant="body1"
						component="p"
						textAlign="center"
						className={classes.headers}
					>
						Please try searching for something else.
					</Typography>
					<Button 
						variant="text" 
						fullWidth
						color="secondary"
				  >
						<Link href="/">
							<a className={classes.buttonLink}>Back to start</a>
						</Link>
					</Button>
				</div>
			</>
		</Layout>
	)
}
