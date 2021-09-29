import { API_URL } from "@/config/index"
import Layout from "@/components/Layout/Layout"
import RecipeItem from "@/components/Recipe/RecipeItem"

/**
 * @TODO: Make img rounded (clip path or avatar?)
 * @TODO: Resize buttons
 * @TODO: Margins
 *
 *
 *  */

export default function RecipePage({ rcp }) {
  return (
    <Layout>
      <RecipeItem rcp={rcp} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/recipes`)
  const recipes = await res.json()

  const paths = recipes.map((rcp) => ({
    params: { slug: rcp.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/recipes/${slug}`)
  const recipe = await res.json()

  return {
    props: {
      rcp: recipe[0],
    },
    revalidate: 1,
  }
}
