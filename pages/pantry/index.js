import Layout from "@/components/Layout"
import PantryItem from "@/components/PantryItem"
import { API_URL } from "@/config/index"
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

      {pantry.map((ingr) => (
        <PantryItem key={ingr.id} ingr={ingr} />
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
  const res = await fetch(`${API_URL}/api/pantry`)
  const pantry = await res.json()

  return {
    props: { pantry },
    revalidate: 1,
  }
}
