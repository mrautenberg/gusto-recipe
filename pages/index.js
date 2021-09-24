import Link from "next/link"
import Layout from "@/components/Layout"
import RecipeItem from "@/components/RecipeItem"
import { API_URL } from "@/config/index"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

export default function HomePage({ recipes }) {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <h1>Popular Recipes</h1>
          {recipes.length === 0 && <h3>No recipes to show</h3>}

          {recipes.map((rcp) => (
            <RecipeItem key={rcp.id} rcp={rcp} />
          ))}

          {recipes.length > 0 && (
            <Button variant="contained">
              <Link href="/recipes">
                <a>See All recipes</a>
              </Link>
            </Button>
          )}
        </Grid>
      </Box>
    </Layout>
  )
}

// Put method below function
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/recipes`)
  const recipes = await res.json()

  return {
    props: { recipes: recipes.slice(0, 4) },
    revalidate: 1, // make new request to find static prop every sec if not found
  }
}
