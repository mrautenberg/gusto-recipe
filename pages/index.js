import Link from "next/link"

import { API_URL } from "@/config/index"
import Layout from "@/components/Layout/Layout"
import Search from "@/components/Search"
import RecipeCard from "@/components/Recipe/RecipeCard"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function HomePage({ recipes }) {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        Welcome to Gusto
      </Typography>
      <Search />
      <br />
      {recipes.length === 0 && (
        <Typography variant="h6" component="h3">
          No recipes to show
        </Typography>
      )}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3}>
        {recipes.map((rcp) => (
          <RecipeCard key={rcp.id} rcp={rcp} />
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
    revalidate: 1,
  }
}
