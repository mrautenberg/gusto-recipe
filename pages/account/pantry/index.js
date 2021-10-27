import { useRouter } from "next/router"
import { makeStyles } from "@mui/styles"

import { API_URL } from "@/config/index"
import { parseCookies } from "@/helpers/index"

import Layout from "@/components/Layout/Layout"
import PantryItem from "@/components/PantryItem"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"

const useStyles = makeStyles({
	header1: {
		marginBottom: "1.5rem",
		marginTop: "-1.5rem"
	},
	cardPadding: {
		padding: "1rem",
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

export default function MyPantryPage({ pantry, token }) {
	const classes = useStyles()
	const router = useRouter()

	const deleteItem = async (id) => {
		if (confirm("Är du säker?")) {
			const res = await fetch(`${API_URL}/pantries/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const data = await res.json()

			if (!res.ok) {
				console.error(data.message)
			} else {
				router.push("/account/pantry")
			}
		}
	}

	return (
		<Layout>
			<Typography variant="h3" component="h1" className={classes.header1}>
				Mitt Pantry
			</Typography>
			<Stack spacing={2} direction="row">
				<Button variant="text">Alla</Button>
				<Button disabled variant="text">
					Kyl
				</Button>
				<Button disabled variant="text">
					Frys
				</Button>
				<Button disabled variant="text">
					Skafferi
				</Button>
			</Stack>
			{pantry.length === 0 && (
				<Typography variant="h6" component="h3">
					Inga ingredienser i ditt pantry, lägg gärna till några
				</Typography>
			)}
			<div className={classes.marginTop}>
				{pantry.map((ingr) => (
					<PantryItem
						key={ingr.id}
						id={ingr.id}
						title={ingr.title}
						quantity={ingr.quantity}
						unit={ingr.unit}
						handleDelete={deleteItem}
					/>
				))}
			</div>
			<Grid container>
				<Grid item xs={12}>
					<Button
						variant="contained"
						fullWidth
						className={classes.btnLarge}
						color="success"
						onClick={() => router.push("pantry/add")}
					>
						Lägg till ingrediens
					</Button>
				</Grid>
			</Grid>
		</Layout>
	)
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req)

	const res = await fetch(`${API_URL}/pantries/me`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	const pantry = await res.json()

	return {
		props: {
			pantry,
			token,
		},
	}
}
