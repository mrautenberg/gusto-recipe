import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"

import { makeStyles } from "@mui/styles"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


const useStyles = makeStyles({
	header1: {
		marginBottom: "1.5rem",
		marginTop: "-1.5rem"
	},
	headers: {
		marginTop: "1rem",
		marginBottom: "1rem",
		fontWeight: "bold"
	},
})

export default function HomePage({ descendingRecipes, ascendingRecipes }) {
	const classes = useStyles()

	return (
		<Layout>
			<Typography
				variant="h3"
				component="h1"
				className={classes.header1}
			>
				Welcome to Gusto
			</Typography>
			<Search />
			<Typography
				variant="h5"
				component="h2"
				className={classes.headers}
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
				className={classes.headers}
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
		</Layout>
	)
}

export async function getServerSideProps() {
	const ascendingRes = await fetch(`${API_URL}/recipes?_sort=title:ASC&_limit=2`)
	const ascendingRecipes = await ascendingRes.json()

	const descendingRes = await fetch(`${API_URL}/recipes?_sort=title:DESC&_limit=2`)
	const descendingRecipes = await descendingRes.json()

	return {
		props: { ascendingRecipes, descendingRecipes },
	}
}
