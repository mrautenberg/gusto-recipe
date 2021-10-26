import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function HomePage({ descendingRecipes, ascendingRecipes }) {
  return (
    <Layout>
      <Typography
        variant="h3"
        component="h1"
        style={{ marginBottom: "1rem" }}
      >
        Welcome to Gusto
      </Typography>
      <Search />
      <Typography
        variant="h5"
        component="h2"
        style={{ margin: "1rem 0" }}
      >
        Nya recept
      </Typography>
      {ascendingRecipes.length === 0 && (
        <Typography variant="h6" component="h3">
          No recipes to show
        </Typography>
      )}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3}>
        {ascendingRecipes.map((rcp) => (
          <RecipeCard key={rcp.id} rcp={rcp} />
        ))}
      </Box>
      <Typography
        variant="h5"
        component="h2"
        style={{ margin: "1rem 0" }}
      >
        Trendar på Gusto
      </Typography>
      {descendingRecipes.length === 0 && (
        <Typography variant="h6" component="h3">
          No recipes to show
        </Typography>
      )}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3}>
        {descendingRecipes.map((rcp) => (
          <RecipeCard key={rcp.id} rcp={rcp} />
        ))}
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
      <IconButton aria-label="Facebook" size="large">
        <FacebookIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="Instagram" size="large">
        <InstagramIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="Twitter" size="large">
        <TwitterIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="Youtube" size="large">
        <YouTubeIcon />
      </IconButton>
    </Stack>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Limit to two in showcase instead of PER_PAGE
  // @TODO: Bad naming and way of fetching needs fixes
  const ascendingRes = await fetch(`${API_URL}/recipes?_sort=title:ASC&_limit=2`)
  const ascendingRecipes = await ascendingRes.json()

  const descendingRes = await fetch(`${API_URL}/recipes?_sort=title:DESC&_limit=2`)
  const descendingRecipes = await descendingRes.json()

  return {
    props: { ascendingRecipes, descendingRecipes },
  }
}
