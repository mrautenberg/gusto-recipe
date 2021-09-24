import Link from "next/link"
import Image from "next/image"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function RecipeItem({ rcp }) {
  return (
    <>
      <Grid item xs={12}>
        <Image
          src={rcp.image || "/images/recipe-default.jpg"}
          width={300}
          height={150}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h3">
          {rcp.title}
        </Typography>
        <Typography variant="body1" component="p">
          5 out of {rcp.ingredients.length} ingredients
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Link href={`/recipes/${rcp.slug}`}>
          <a>More information</a>
        </Link>
      </Grid>
    </>
  )
}
