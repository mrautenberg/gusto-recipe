import { useState } from "react"

import AddIcon from "@mui/icons-material/Add"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import RemoveIcon from "@mui/icons-material/Remove"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function RecipeItem({ rcp }) {
  const [showIngredients, setShowIngredients] = useState(true)

  return (
    <>
      <Card
        elevation={5}
        sx={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        {rcp.image && (
          <CardMedia
            component="img"
            height="200"
            image={rcp.image.formats.thumbnail.url}
            alt={rcp.title}
          />
        )}

        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ margin: "1rem 0" }}
        >
          {rcp.title}
        </Typography>

        <Grid item xs={12}>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="contained button group"
          >
            <Button
              sx={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              Klart om {rcp.minutes} <br /> minuter
            </Button>
            <Button
              sx={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              Ingredienser <br />
              4/7
            </Button>
          </ButtonGroup>
        </Grid>
      </Card>

      <Grid container={{ marginTop: "1rem" }} >
        <Grid item xs={12}>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            fullWidth
            elevation={5}
            style={{ minHeight: "3rem", marginBottom: "1rem" }}
          >
            <Button onClick={() => setShowIngredients(true)}>
              ingredienser
            </Button>
            <Button
              onClick={() => setShowIngredients(false)}
            >
              instruktioner
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            style={{ marginBottom: "1rem" }}
          >
            <Typography variant="body1" component="h3">
              <b>{rcp.portions}</b> portioner
            </Typography>
            <IconButton
              sx={{
                borderRadius: "3px",
                border: "1px solid black",
                color: "#000",
              }}
              onClick={() => console.log("Add portion")}
              size="small"
              variant="contained"
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: "3px",
                border: "1px solid black",
                color: "#000",
              }}
              onClick={() => console.log("Remove portion")}
              size="small"
              variant="contained"
            >
              <RemoveIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          {showIngredients ? (
            <>
              <Typography variant="h5" component="h2">
                Ingredienser:
              </Typography>
              <ul style={{ listStyle: "none", padding: "0" }}>
                {rcp.ingredients.split("\n").map((r) => (
                  <li style={{ marginBottom: "0.5rem" }} key={r.id}>{r}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <Typography variant="h5" component="h2">
                Instruktioner
              </Typography>
              <ol style={{ listStyle: "none", padding: "0" }}>
                {rcp.instructions.split("\n").map((r) => (
                  // @TODO: Should be an id/idx but changed for now
                  // to keep warning away in console temporarily
                  <li style={{ marginBottom: "0.5rem" }} key={Math.random()}>{r}</li>
                ))}
              </ol>
            </>
          )}

          <Typography style={{ marginBottom: "0.5rem" }} variant="h5" component="h2">
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
