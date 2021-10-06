import { API_URL, PER_PAGE } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"
import Pagination from "@/components/Pagination"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

/**
 * @TODO: Fixed card size
 * @TODO: Typography fixes
 * @TODO: Image size fixes
 * @TODO: Fix pagination
 */

// Will this be the search results??
export default function RecipesPage({ recipes, page, total }) {
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
      <Pagination page={page} total={total} />
    </Layout>
  )
}

// Put method below function
export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page (+ turns into num)
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/recipes/count`)
  const total = await totalRes.json()

  // Fetch recipes
  const recipeRes = await fetch(
    `${API_URL}/recipes?_sort=title:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const recipes = await recipeRes.json()

  return {
    props: { recipes, page: +page, total },
  }
}
