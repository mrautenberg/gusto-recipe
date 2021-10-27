import { useState } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@mui/styles"
import Link from "next/link"

import { parseCookies } from "@/helpers/index"
import { API_URL } from "@/config/index"
import Layout from "@/components/Layout/Layout"

import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import InputLabel from "@mui/material/InputLabel"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const useStyles = makeStyles({
	header: {
		margin: "1.5rem 0",
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

export default function AddToPantryPage({ token }) {
	const classes = useStyles()
	const router = useRouter()

	const [values, setValues] = useState({
		title: "",
		quantity: "",
		unit: "",
	})

	const handleSubmit = async (e) => {
		e.preventDefault()

		const hasEmptyFields = Object.values(values).some(
			(element) => element === ""
		)

		if (hasEmptyFields) {
			alert("Please fill in all fields")
			return
		}

		const res = await fetch(`${API_URL}/pantries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(values),
		})

		if (!res.ok) {
			if (res.status === 401 || res.status === 403) {
				alert("No token included")
				return
			}

			alert("Something went wrong")
			return
		} else {
			const ingr = await res.json()
			router.push(`/account/pantry`)
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	return (
		<Layout title="Add To Pantry">
			<Card>
				<div className={classes.cardPadding}>
					<Typography variant="h3" component="h1" className={classes.header}>
						Ny ingrediens
					</Typography>
					<form onSubmit={handleSubmit} noValidate autoComplete="off">
						<div>
							<InputLabel htmlFor="title">Ingrediens</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								type="text"
								id="title"
								name="title"
								value={values.title}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<InputLabel htmlFor="quantity" className={classes.marginTop}>
								Mängd
							</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								type="number"
								id="quantity"
								name="quantity"
								value={values.quantity}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<InputLabel htmlFor="unit" className={classes.marginTop}>
								Enhet
							</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								type="text"
								id="unit"
								name="unit"
								value={values.unit}
								onChange={handleInputChange}
							/>
						</div>
						<Button
							type="submit"
							className={classes.btnLarge}
							variant="contained"
							fullWidth
						>
							Lägg till
						</Button>
						<p>
							Ändrat dig eller klar här? <br />
							<Link href="/account/pantry"> Tillbaka till Pantry </Link>
						</p>
					</form>
				</div>
			</Card>
		</Layout>
	)
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req)

	return {
		props: {
			token,
		},
	}
}
