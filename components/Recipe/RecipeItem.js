import { useState } from "react"
import { makeStyles } from "@mui/styles"

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

const useStyles = makeStyles({
  recipeCard: {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  buttonLeft: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
  buttonRight: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  whatAndHowBtns: {
    minHeight: "3rem",
    marginBottom: "1rem" 
  },
  mb1: {
    marginBottom: "1rem"
  },
  iconButton: {
    borderRadius: "3px",
    border: "1px solid black",
    color: "#000",
  },
  list: {
    listStyle: "none", 
    padding: "0"
  },
  listItem: {
    marginBottom: "0.5rem"
  }
})

export default function RecipeItem({ rcp }) {
  const [showIngredients, setShowIngredients] = useState(true)

  const classes = useStyles()

  return (
    <>
      <Card elevation={5} className={classes.recipeCard} >
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
            <Button className={classes.buttonLeft} >
              Klart om {rcp.minutes} <br /> minuter
            </Button>
            <Button className={classes.buttonRight} >
              Ingredienser <br />
              4/7
            </Button>
          </ButtonGroup>
        </Grid>
      </Card>

      <Grid>
        <Grid item xs={12}>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            fullWidth
            elevation={5}
            className={classes.whatAndHowBtns}
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
            className={classes.mb1}
          >
            <Typography variant="body1" component="h3">
              <b>{rcp.portions}</b> portioner
            </Typography>
            <IconButton
              className={classes.iconButton}
              onClick={() => console.log("Add portion")}
              size="small"
              variant="contained"
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
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
              <ul className={classes.list}>
                {rcp.ingredients.split("\n").map((r) => (
                  <li className={classes.listItem} key={r.id}>{r}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <Typography variant="h5" component="h2">
                Instruktioner
              </Typography>
              <ol className={classes.list}>
                {rcp.instructions.split("\n").map((r) => (
                  // @TODO: Should be an id/idx but changed for now
                  // to keep warning away in console temporarily
                  <li className={classes.listItem} key={Math.random()}>{r}</li>
                ))}
              </ol>
            </>
          )}

          <Typography 
            className={classes.header} 
            variant="h5" 
            component="h2"
          >
            Author
          </Typography>
          <Typography 
            variant="body1" 
            component="p"
          >
            {rcp.author}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
