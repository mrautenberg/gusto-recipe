import qs from "qs"
import { useRouter } from "next/router"
import { makeStyles } from "@mui/styles"

import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import RecipeCard from "@/components/Recipe/RecipeCard"
import Search from "@/components/Search"

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
	cardPadding: {
		padding: "1rem",
	},
	marginTop: {
		marginTop: "1rem",
	},
	btnLarge: {
		padding: "1em",
		marginTop: "2rem",
		borderRadius: "40px",
	},
})

export default function SearchPage({ recipes }) {
	const router = useRouter()
	const classes = useStyles()

	return (
		<Layout title="Search results">
			<Typography
				variant="h3"
				component="h1"
				className={classes.header1}
			>
				Search Results
			</Typography>
			<Typography
				variant="h5"
				component="h2"
				className={classes.headers}
			>
				Search term: <b>{router.query.term.toLowerCase()}</b>
			</Typography>
			<Search label="Search recipes" />
			{recipes.length === 0 && (
				<Typography
					variant="h6"
					component="h3"
					className={classes.headers}
					sx={{ textAlign: "center" }}
				>
					No recipes found, please try searching for something else.
				</Typography>
			)}
			<Box
				display="grid"
				gridTemplateColumns="repeat(2, 1fr)"
				gap={3}
				className={classes.headers}
			>
				{recipes.map((rcp) => (
					<RecipeCard key={rcp.id} rcp={rcp} />
				))}
			</Box>
		</Layout>
	)
}

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [
				{ title_contains: term },
				{ category_contains: term },
				{ ingredients_contains: term },
			],
		},
	})

	const res = await fetch(`${API_URL}/recipes?${query}`)
	const recipes = await res.json()

	return {
		props: { recipes },
	}
}
