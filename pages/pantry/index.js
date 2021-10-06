import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import PantryItem from "@/components/PantryItem"

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { useRouter } from "next/router"

// Will this be the search results??
export default function MyPantryPage({ pantry }) {
  const router = useRouter()

  return (
    <Layout>
      <Typography variant="h3" component="h1">
        My Pantry
      </Typography>
      {pantry.length === 0 && (
        <Typography variant="h6" component="h3">
          No Ingredients in your pantry - add some!
        </Typography>
      )}
      {/* no big fan of the way to fetch but works as of now */}
      {pantry.map((ingr) => (
        <PantryItem
          key={ingr[1].id}
          id={ingr[1].id}
          title={ingr[1].title}
          quantity={ingr[1].quantity}
          unit={ingr[1].unit}
        />
      ))}
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

// Put method below function
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/pantries`)
  const pantry = await res.json()

  return {
    props: { pantry: Object.entries(pantry) },
    revalidate: 1,
  }
}
