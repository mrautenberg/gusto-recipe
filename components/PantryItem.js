import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

export default function PantryItem(props) {
  const { title, quantity, unit } = props

  return (
    <>
      <Card variant="outlined">
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

            <Grid item xs={4}>
              <Button
                variant="contained"
                color="info"
                onClick={() => console.log(`edit ${title}`)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => console.log(`delete ${title}`)}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
