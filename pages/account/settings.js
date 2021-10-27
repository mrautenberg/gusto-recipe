import { makeStyles } from "@mui/styles"

import Layout from "@/components/Layout/Layout"
import Link from "next/link"

import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"

const useStyles = makeStyles({
	smallCard: {
		padding: "0.5em",
		textAlign: "center",
	},
	cardLink: {
		textDecoration: "none",
		color: "black",
	},
})

export default function SettingsPage() {
	const classes = useStyles()

	return (
		<Layout title="Settings">
			<Typography
				sx={{ marginBottom: "1.5rem" }}
				variant="h3"
				component="h1"
			>
				Inställningar
			</Typography>

			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Grid container>
						<Grid item xs={4}>
							<CardMedia
								sx={{ borderRadius: "10px", marginTop: "1rem" }}
								component="img"
								height="130"
								// Fix image url
								image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
								alt=""
							/>
						</Grid>
						<Grid item xs={1} />
						<Grid item xs={7}>
							<Typography variant="h6" component="div" fontWeight="bold">
								Ditt Namn
							</Typography>
							<Typography
								sx={{ mb: 1.5 }}
								variant="body1"
								gutterBottom
								color="text.secondary"
							>
								mittnamn@email.se
							</Typography>
							<Divider />
							<Typography
								variant="body2"
								fontWeight="bold"
								sx={{ mb: 0.5, mt: 0.5 }}
								color="text.secondary"
							>
								070 123 45 67
							</Typography>
							<Divider />
							<Typography variant="body2" component="p">
								Storgatan 10
							</Typography>
							<Typography variant="body2" component="p">
								Storstaden
							</Typography>
							<Typography variant="body2" component="p">
								Sverige
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button disabled fullWidth variant="contained">
						Uppdatera
					</Button>
				</CardActions>
			</Card>
			<br />
			<Card className={classes.smallCard}>
				<Link href="/account/privacy">
					<a className={classes.cardLink}>Integritetspolicy </a>
				</Link>
			</Card>
			<br />
			<Card className={classes.smallCard}>
				<Link href="/account/contact">
					<a className={classes.cardLink}>Kontakta Oss</a>
				</Link>
			</Card>
		</Layout>
	)
}
