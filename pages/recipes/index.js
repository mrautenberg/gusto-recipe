import { API_URL, PER_PAGE } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"
import Pagination from "@/components/Pagination"

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

export default function RecipesPage({ recipes, page, total }) {
	const classes = useStyles()

	return (
		<Layout>
			<Typography
				variant="h3"
				component="h1"
				className={classes.header1}
			>
				Alla recept
			</Typography>
			<Search />
			<br />
			{recipes.length === 0 && (
				<Typography
					variant="h6"
					component="h3"
					className={classes.headers}
				>
					Inga recept tillgängliga
				</Typography>
			)}
			<Box
				display="grid"
				gridTemplateColumns="repeat(2, 1fr)"
				gap={3}
			>
				{recipes.map((rcp) => (
					<RecipeCard key={rcp.id} rcp={rcp} />
				))}
			</Box>
			<Pagination page={page} total={total} />
		</Layout>
	)
}

export async function getServerSideProps({ query: { page = 1 } }) {
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

	const totalRes = await fetch(`${API_URL}/recipes/count`)
	const total = await totalRes.json()

	const recipeRes = await fetch(
		`${API_URL}/recipes?_sort=title:ASC&_limit=${PER_PAGE}&_start=${start}`
	)
	const recipes = await recipeRes.json()

	return {
		props: { recipes, page: +page, total },
	}
}
