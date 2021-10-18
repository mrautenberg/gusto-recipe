import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeItem from "@/components/Recipe/RecipeItem"

export default function RecipePage({ rcp }) {
  return (
    <Layout>
      <RecipeItem rcp={rcp} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/recipes`)
  const recipes = await res.json()

  const paths = recipes.map((rcp) => ({
    params: { slug: rcp.slug.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/recipes?slug=${slug}`)
  const recipe = await res.json()

  return {
    props: {
      rcp: recipe[0],
    },
    revalidate: 1,
  }
}
