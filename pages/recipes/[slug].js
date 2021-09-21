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

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/recipes/edit/${rcp.id}`}>
            <a>
              <FaPencilAlt /> Edit recipe
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Recipe
          </a>
        </div>

        <span>
          {rcp.date} at {rcp.time}
        </span>
        <h1>{rcp.name}</h1>
        {rcp.image && (
          <div className={styles.image}>
            <Image src={rcp.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{rcp.performers}</p>
        <h3>Description:</h3>
        <p>{rcp.description}</p>
        <h3>Venue: {rcp.venue}</h3>
        <p>{rcp.address}</p>

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
