import Link from "next/link"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"

export default function RecipeCard({ rcp }) {
  return (
    <Grid item xs={12}>
      <Card>
        <Link href={`/recipes/${rcp.slug}`}>
          <a>
            <CardMedia
              component="img"
              height="200"
              image={rcp.image}
              alt={rcp.title}
            />
          </a>
        </Link>

        <Typography variant="h6" component="h3">
          {rcp.title}
        </Typography>
        <Typography variant="body1" component="p">
          5 out of {rcp.ingredients.length} ingredients
        </Typography>
      </Card>
    </Grid>
  )
}
