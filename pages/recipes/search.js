import qs from "qs"
import { useRouter } from "next/router"

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
export default function SearchPage({ recipes }) {
  const router = useRouter()

  return (
    <Layout title="Search results">
      <Typography variant="h3" component="h1">
        Search Results for {router.query.term}
      </Typography>
      <Search label="Search recipes" />
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
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { category_contains: term },
        { ingredients_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/recipes?${query}`)
  const recipes = await res.json()

  return {
    props: { recipes },
  }
}
