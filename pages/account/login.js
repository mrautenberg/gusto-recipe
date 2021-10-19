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

export default function LoginPage() {
  const classes = useStyles()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, error } = useContext(AuthContext)

  useEffect(() => error && alert(error))

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <Layout title="User Login">
      <Card>
        <div className={classes.cardPadding}>
          <Typography variant="h3" component="h1" className={classes.header}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <TextField
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                value={email}
                required
                variant="standard"
              />
            </div>
            <div>
              <InputLabel htmlFor="password" className={classes.marginTop}>
                Password
              </InputLabel>
              <TextField
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                value={password}
                required
                variant="standard"
              />
            </div>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              className={classes.btnLarge}
            >
              Login
            </Button>
          </form>

          <p>
            Don't have an account?{" "}
            <Link href="/account/register"> Register </Link>
          </p>
        </div>
      </Card>
    </Layout>
  )
}
