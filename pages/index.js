import Link from "next/link"
import Layout from "@/components/Layout"
import RecipeItem from "@/components/RecipeItem"
import { API_URL } from "@/config/index"

export default function HomePage({ recipes }) {
  return (
    <Layout>
      <h1>Trending Bumblebees</h1>
      {recipes.length === 0 && <h3>No bumblebees to show</h3>}

      {recipes.map((rcp) => (
        <RecipeItem key={rcp.id} rcp={rcp} />
      ))}

      {recipes.length > 0 && (
        <Link href="/recipes">
          <a className="btn-secondary">See All recipes</a>
        </Link>
      )}
    </Layout>
  )
}

// Put method below function
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/recipes`)
  const recipes = await res.json()

  return {
    props: { recipes: recipes.slice(0, 3) },
    revalidate: 1, // make new request to find static prop every sec if not found
  }
}
