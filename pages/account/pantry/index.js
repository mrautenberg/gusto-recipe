import { API_URL } from "@/config/index"
import { parseCookies } from "@/helpers/index"

import Layout from "@/components/Layout/Layout"
import PantryItem from "@/components/PantryItem"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { useRouter } from "next/router"

export default function MyPantryPage({ pantry, token }) {
  const router = useRouter()

  const deleteItem = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/pantries/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json()

      if (!res.ok) {
        console.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout>
      <Typography variant="h3" component="h1" sx={{ marginBottom: "1.5rem" }}>
        My Pantry
      </Typography>
      {pantry.length === 0 && (
        <Typography variant="h6" component="h3">
          No Ingredients in your pantry - add some!
        </Typography>
      )}
      <>
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
      </>
      <Grid container>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={() => router.push("pantry/add")}
          >
            Add ingredient
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
      Authorization: `Bearer ${token}`
    }
  })

  const pantry = await res.json()

  return {
    props: {
      pantry,
      token
    }
  }
}