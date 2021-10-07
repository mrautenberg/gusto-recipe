import { useState } from "react"

import AddIcon from "@mui/icons-material/Add"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import RemoveIcon from "@mui/icons-material/Remove"
import Typography from "@mui/material/Typography"

export default function RecipeItem({ rcp }) {
  const [showIngredients, setShowIngredients] = useState(true)

  return (
    <>
      <Card>
        {rcp.image && (
          <CardMedia
            component="img"
            height="200"
            image={rcp.image.formats.thumbnail.url}
            alt={rcp.title}
          />
        )}

        <Typography variant="h3" component="h1" align="center" gutterBottom>
          {rcp.title}
        </Typography>
      </Card>

      <Grid container>
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
          <ButtonGroup variant="text" aria-label="text button group" fullWidth>
            <Button onClick={() => setShowIngredients(true)}>
              Ingredients
            </Button>
            <Button onClick={() => setShowIngredients(false)}>
              Do Like This
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" component="h3">
            {rcp.portions} portions
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <ButtonGroup>
            <Button disabled variant="contained" color="secondary">
              <AddIcon />
            </Button>
            <Button disabled variant="contained" color="secondary">
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          {showIngredients ? (
            <>
              <Typography variant="h5" component="h2">
                Ingredients:
              </Typography>
              <ul style={{ listStyle: "none" }}>
                {rcp.ingredients.split(",").map((r) => (
                  <li key={r.id}>{r}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <Typography variant="h5" component="h2">
                Instructions
              </Typography>
              <ol style={{ listStyle: "none" }}>
                {rcp.instructions.split("\n").map((r) => (
                  <li key={r.id}>{r}</li>
                ))}
              </ol>
            </>
          )}

          <Typography variant="h5" component="h2">
            Author
          </Typography>
          <Typography variant="body1" component="p">
            {rcp.author}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
