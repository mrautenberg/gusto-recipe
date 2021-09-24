import { useState } from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"

export default function RecipePage({ rcp }) {
  const [showIngredients, setShowIngredients] = useState(true)

  return (
    <Layout>
      <>
        <Card>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            {rcp.title}
          </Typography>
          {rcp.image && (
            <CardMedia
              component="img"
              height="200"
              image={rcp.image}
              alt={rcp.title}
            />
          )}
        </Card>
        <Grid>
          <Grid item xs={12}>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="contained button group"
            >
              <Button>Ready in {rcp.minutes} </Button>
              <Button>Ingredients 4/7</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              fullWidth
            >
              <Button onClick={() => setShowIngredients(true)}>
                Ingredients
              </Button>
              <Button onClick={() => setShowIngredients(false)}>
                Do Like This
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Typography color="secondary">
          <Typography variant="h6" component="h3">
            Portions: {rcp.portions}
          </Typography>

          {showIngredients ? (
            <>
              <Typography variant="h5" component="h2">
                Ingredients:
              </Typography>
              {rcp.ingredients.map((r) => (
                <li key={r.id}>{r}</li>
              ))}
            </>
          ) : (
            <>
              <Typography variant="h5" component="h2">
                Instructions
              </Typography>
              {rcp.instructions.map((r) => (
                <li key={r.id}>{r}</li>
              ))}
            </>
          )}

          <Typography variant="h5" component="h2">
            Author
          </Typography>
          <Typography variant="body1" component="p">
            {rcp.author}
          </Typography>
        </Typography>
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
