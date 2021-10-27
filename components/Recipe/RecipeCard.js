import { makeStyles } from "@mui/styles"

import Link from "next/link"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"

const useStyles = makeStyles({
	header1: {
		marginBottom: "1.5rem",
		marginTop: "-1.5rem"
	},
	card: {
		height: "250px",
		textAlign: "center"
	},
	cardPadding: {
		padding: "1rem",
	},
	cardHeader: {
		lineHeight: "1.1",
		marginTop: "0.3rem"
	},
	cardText: {
		color: "green",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "center",
		marginTop: "0.2rem"
	},
	marginTop: {
		marginTop: "1rem",
	},
	btnLarge: {
		padding: "1em",
		marginTop: "2rem",
		borderRadius: "40px",
	},
})

export default function RecipeCard({ rcp }) {
	const classes = useStyles()

	return (
		<Grid item xs={12} >
			<Link href={`/recipes/${rcp.slug}`}>
				<a style={{ textDecoration: "none" }}>
					<Card className={classes.card}>
						<CardMedia
							component="img"
							height="160"
							image={rcp.image.formats.thumbnail.url}
							alt={rcp.title}
						/>
						<Typography
							variant="h6"
							component="h2"
							className={classes.cardHeader}
						>
							{rcp.title.slice(0, 24)}
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={classes.cardText}
						>
							{/* @TODO: Add number from pantry instead of hard coded 5 */}  Ingredienser 5 / {rcp.ingredients.split("\n").length}
						</Typography>
					</Card>
				</a>
			</Link>
		</Grid>
	)
}
