import { useState, useEffect, useContext } from "react"
import { makeStyles } from "@mui/styles"

import AuthContext from "@/context/AuthContext"
import Link from "next/link"
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

export default function RegisterPage() {
	const classes = useStyles()

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")

	const { register, error } = useContext(AuthContext)

	useEffect(() => error && alert(error))

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password !== passwordConfirm) {
			alert("Passwords do not match!")
			return
		}

		register({ email, username, password })
	}

	return (
		<Layout title="User Registration">
			<Card>
				<div className={classes.cardPadding}>
					<Typography variant="h3" component="h1" className={classes.header}>
						Register
					</Typography>
					<form onSubmit={handleSubmit} noValidate autoComplete="off">
						<div>
							<InputLabel htmlFor="username">Username</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								onChange={(e) => setUsername(e.target.value)}
								type="text"
								id="username"
								value={username}
							/>
						</div>
						<div>
							<InputLabel htmlFor="email" className={classes.marginTop}>
								Email Address
							</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								id="email"
								value={email}
							/>
						</div>
						<div>
							<InputLabel htmlFor="password" className={classes.marginTop}>
								Password
							</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								id="password"
								value={password}
							/>
						</div>
						<div>
							<InputLabel
								htmlFor="passwordConfirm"
								className={classes.marginTop}
							>
								Confirm Password
							</InputLabel>
							<TextField
								fullWidth
								required
								variant="standard"
								onChange={(e) => setPasswordConfirm(e.target.value)}
								type="password"
								id="passwordConfirm"
								value={passwordConfirm}
							/>
						</div>
						<Button
							variant="contained"
							fullWidth
							type="submit"
							className={classes.btnLarge}
						>
							Register
						</Button>
					</form>
					<p>
						Don't have an account? <Link href="/account/login"> Login </Link>
					</p>
				</div>
			</Card>
		</Layout>
	)
}
