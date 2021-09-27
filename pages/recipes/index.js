import Layout from "@/components/Layout"
import RecipeItem from "@/components/RecipeItem"
import { API_URL } from "@/config/index"
import Typography from "@mui/material/Typography"

// Will this be the search results??
export default function RecipesPage({ recipes }) {
  return (
    <Layout>
      <Typography variant="h3" component="h1">
        All Recipes
      </Typography>
      {recipes.length === 0 && (
        <Typography variant="h6" component="h3">
          No recipes to show
        </Typography>
      )}

      {recipes.map((rcp) => (
        <RecipeItem key={rcp.id} rcp={rcp} />
      ))}
    </Layout>
  )
}

// Put method below function
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/recipes`)
  const recipes = await res.json()

  return {
    props: { recipes },
    revalidate: 1,
  }
}
