import Link from "next/link"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"

export default function RecipeCard({ rcp }) {
  return (
    <Grid item xs={12} >
      <Link href={`/recipes/${rcp.slug}`}>
        <a>
          <Card sx={{ height: "250px", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="160"
              image={rcp.image.formats.thumbnail.url}
              alt={rcp.title}
            />
            <Typography variant="body1" component="h2">
              {rcp.title.slice(0, 24)}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "green", fontWeight: "bold" }}
            >
              {/* Wrong number since it's a string and not an array */}5 out of{" "}
              {rcp.ingredients.length} ingredients
            </Typography>
          </Card>
        </a>
      </Link>
    </Grid>
  )
}
