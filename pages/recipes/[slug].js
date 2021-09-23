import Link from "next/link"
import Image from "next/image"

import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"

import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"

export default function RecipePage({ rcp }) {
  // show either ingridients or description
  const toggleInfo = () => {
    console.log("toggle info")
    // Set state to description, if not show ingredients
  }

  return (
    <Layout>
      <>
        <Card sx={{ maxWidth: 345 }}>
          <h1>{rcp.title}</h1>
          {rcp.image && (
            <CardMedia
              component="img"
              height="200"
              image={rcp.image}
              alt="default recipe"
            />
          )}
        </Card>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Ready in 45 min</Button>
          <Button>Ingredients 4/7</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Ingredients</Button>
          <Button>Do Like This</Button>
        </ButtonGroup>

        {/* LOOK UP TYPOGRAPHY! */}
        {/* TOGGLE EITHER INGR OR INSTR */}
        <Typography color="secondary">
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
        </Typography>
        {/* POSITION IN HEADER */}
        <Link href="/recipes">
          <a>
            <ArrowBackIcon />
          </a>
        </Link>
        <br />
        <Link href="#">
          <a>
            <MenuIcon />
          </a>
        </Link>
      </>
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
