import Link from "next/link"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"

export default function RecipeCard({ rcp }) {
  return (
    <Grid item xs={12} >
      <Link href={`/recipes/${rcp.slug}`}>
        <a style={{ textDecoration: "none" }}>
          <Card sx={{ height: "250px", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="160"
              image={rcp.image.formats.thumbnail.url}
              alt={rcp.title}
            />
            <Typography variant="h6" component="h2" style={{ lineHeight: "1.1" }} >
              {rcp.title.slice(0, 24)}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "green", fontWeight: "bold" }}
              style={{
                display: "flex", justifyContent: "center", marginTop: "0.2rem"
              }}
            >
              {/* @TODO: Add number from pantry instead of hard coded 5 */}  Ingredienser 5 / {rcp.ingredients.split("\n").length}
            </Typography>
          </Card>
        </a>
      </Link>
    </Grid>
  )
}
