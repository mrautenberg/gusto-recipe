import Layout from "@/components/Layout"
import RecipeItem from "@/components/RecipeItem"
import { API_URL } from "@/config/index"

// Will this be the search results??
export default function RecipePage({ recipes }) {
  return (
    <Layout>
      <h1>All Recipes</h1>
      {recipes.length === 0 && <h3>No recipes to show</h3>}

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
