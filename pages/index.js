import { API_URL } from "@/config/index"
import Link from "next/link"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

/**
 *  @TODO: Create a more dashboard/landing page layout
 *            - Search recipe in focus
 *            - Add to pantry/see pantry
 *            - Latest recipes/treding
 *            - News from Gusto
 */

export default function HomePage({ recipes }) {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        Welcome to Gusto
      </Typography>
      <Search />
      <Typography variant="h5" component="h2">
        Check out our latest recipes
      </Typography>
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
      <Typography variant="h5" component="h2">
        Do you need to add something to your pantry?{" "}
        <Link href="/account/pantry">Go to your pantry</Link>
      </Typography>
      <Typography>
        Looking for something else? <Link href="/recipes">See all recipes</Link>
      </Typography>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Limit to two in showcase instead of PER_PAGE
  const res = await fetch(`${API_URL}/recipes?_sort=title:ASC&_limit=2`)
  const recipes = await res.json()

  return {
    props: { recipes },
  }
}
