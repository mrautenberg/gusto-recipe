import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

/**
 * @TODO: Fixed card size
 * @TODO: Typography fixes
 * @TODO: Image size fixes
 * @TODO: Fix pagination
 */

// Will this be the search results??
export default function RecipesPage({ recipes }) {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        All Recipes
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
      </Box>
    </Layout>
  )
}

// Put method below function
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/recipes_sort=title:ASC`)
  const recipes = await res.json()

  return {
    props: { recipes },
    revalidate: 1,
  }
}
