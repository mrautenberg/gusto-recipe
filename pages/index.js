import Link from "next/link"
import Layout from "@/components/Layout"
import RecipeItem from "@/components/RecipeItem"
import { API_URL } from "@/config/index"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function HomePage({ recipes }) {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Typography variant="h3" component="h1">
          Popular Recipes
        </Typography>
        {recipes.length === 0 && (
          <Typography variant="h6" component="h3">
            No recipes to show
          </Typography>
        )}

        {recipes.map((rcp) => (
          <Grid item spacing={2} xs={6}>
            <RecipeItem key={rcp.id} rcp={rcp} />
          </Grid>
        ))}

        <Grid item xs={12}>
          {recipes.length > 0 && (
            <Button fullWidth variant="contained">
              <Link href="/recipes">
                <a>See All recipes</a>
              </Link>
            </Button>
          )}
        </Grid>
      </Grid>
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
