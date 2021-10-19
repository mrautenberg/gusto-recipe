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

export default function EditPantryPage({ item, token }) {
  const classes = useStyles()
  const router = useRouter()

  const [values, setValues] = useState({
    title: item.title,
    quantity: item.quantity,
    unit: item.unit,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    )

    if (hasEmptyFields) {
      console.error("Please fill in all fields")
      return
    }

    const res = await fetch(`${API_URL}/pantries/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        alert("Unauthorized")
        return
      }
      alert("Error")
    } else {
      const ingr = await res.json()
      router.push(`/pantry`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title="Edit Ingredient">
      <Card>
        <div className={classes.cardPadding}>
          <Typography variant="h3" component="h1" className={classes.header}>
            Edit Ingredient
          </Typography>
          <form onSubmit={handleSubmit}>
            <div>
              <InputLabel htmlFor="title">Ingredient</InputLabel>
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
                Quantity
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
                Unit
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
              Update
            </Button>
            <p>
              Changed your mind?{" "}
              <Link href="/account/pantry"> Go back to Pantry </Link>
            </p>
          </form>
        </div>
      </Card>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/pantries/${id}`)
  const item = await res.json()

  return {
    props: {
      item,
      token,
    },
  }
}
