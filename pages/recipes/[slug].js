import { FaPencilAlt, FaTimes } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import styles from "@/styles/Recipe.module.css"

export default function RecipePage({ rcp }) {
  const deleteEvent = () => {
    console.log("Recipe Deleted")
  }

  // show either ingridients or description
  const toggleInfo = () => {
    console.log("toggle info")
    // Set state to description, if not show ingredients
  }

  return (
    <Layout>
      <div className={styles.event}>
        {/* <div className={styles.controls}>
          <Link href={`/recipes/edit/${rcp.id}`}>
            <a>
              <FaPencilAlt /> Edit recipe
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Recipe
          </a>
        </div> */}

        {/* @TODO: Create render out JSX in a better way (tags & visually) */}
        <h1>{rcp.title}</h1>
        {rcp.image && (
          <div className={styles.image}>
            <Image src={rcp.image} width={960} height={600} />
          </div>
        )}
        <h3>Ingredients:</h3>
        {rcp.ingredients.map((r) => (
          <p key={r.id}>{r}</p>
        ))}
        <h3>Cooking time:</h3>
        <p>{rcp.minutes}</p>
        <h3>Portions: {rcp.portions}</h3>
        <h3>Category</h3>
        <p>{rcp.category}</p>
        <h3>Instructions</h3>
        {rcp.instructions.map((r) => (
          <p key={r.id}>{r}</p>
        ))}
        <h3>Author</h3>
        <p>{rcp.author}</p>

        <Link href="/recipes">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
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
