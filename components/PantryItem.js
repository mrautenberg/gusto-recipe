import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { API_URL } from "../config/index"
import { useRouter } from "next/router"

export default function PantryItem(props) {
  const { title, quantity, unit, id } = props
  const router = useRouter()

  // Move higher up and pass as props
  const deleteEvent = async () => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/pantries/${id}`, {
        method: "DELETE",
      })
      const data = await res.json()

      if (!res.ok) {
        console.error(data.message)
      } else {
        router.push("/pantry")
      }
    }
  }

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
                onClick={() => router.push(`/pantry/edit/${id}`)}
              >
                <EditIcon />
              </Button>
              <Button variant="contained" color="error" onClick={deleteEvent}>
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
