import Link from "next/link"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

export default function PantryItem({ ingr }) {
  return (
    <>
      {/* <Grid item xs={12}>
        <Image
          src={ingr.image || "/images/recipe-default.jpg"}
          width={300}
          height={150}
        />
      </Grid> */}
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" component="h3">
                {ingr.name.toUpperCase()}
              </Typography>
              <Typography variant="body1" component="p">
                {ingr.quantity} units
              </Typography>
              <Typography variant="body1" component="p">
                category {ingr.category}
              </Typography>
              <Typography variant="body1" component="p">
                user: {ingr.user}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Button
                variant="contained"
                color="info"
                onClick={() => console.log(`edit ${ingr.name}`)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => console.log(`delete ${ingr.name}`)}
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
