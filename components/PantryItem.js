import { makeStyles } from "@mui/styles"

import { useRouter } from "next/router"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"

import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

const useStyles = makeStyles({
  cardMargin: {
    margin: "0.5em 0",
  },
  gridFlex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
})

export default function PantryItem(props) {
  const { title, quantity, unit, id, handleDelete } = props

  const classes = useStyles()
  const router = useRouter()

  return (
    <>
      <Card className={classes.cardMargin} variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" component="h3">
                {title.toUpperCase()}
              </Typography>
              <Typography variant="body1" component="p">
                {quantity} {unit}
              </Typography>
            </Grid>

            <Grid item xs={4} className={classes.gridFlex}>
              <IconButton
                aria-label="edit"
                size="small"
                color="info"
                onClick={() => router.push(`pantry/edit/${id}`)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                variant="contained"
                aria-label="delete"
                color="error"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
