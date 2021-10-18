import { useState } from "react"
import { useRouter } from "next/router"

import { parseCookies } from "@/helpers/index"
import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"

import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

export default function AddToPantryPage({ token }) {
  const router = useRouter()

  const [values, setValues] = useState({
    title: "",
    quantity: "",
    unit: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation (if true we want an error)
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    )

    if (hasEmptyFields) {
      // Add error message through mui or use toastify
      alert("Please fill in all fields")
    }

    const res = await fetch(`${API_URL}/pantries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        alert("No token included")
        return
      }

      alert("Something went wrong")
    } else {
      const ingr = await res.json()
      router.push(`/pantry`)
      console.log(`You've added ${ingr} to your pantry`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Spread out what's already there and assign name it's value
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title="Add To Pantry">
      <Grid container>
        <Typography
          sx={{ marginBottom: "1.5rem" }}
          variant="h3"
          component="h1"
        >
          Add To Pantry
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <label htmlFor="title">Ingredient</label>
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={values.quantity}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid container xs={12}>
            <label htmlFor="unit">Unit</label>
            <input
              type="text"
              id="unit"
              name="unit"
              value={values.unit}
              onChange={handleInputChange}
            />
          </Grid>
          <input type="submit" value="Add" />
        </form>

        <Button
          variant="contained"
          onClick={() => router.push("account/pantry")}
        >
          Back to Pantry
        </Button>
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  return {
    props: {
      token
    }
  }
}