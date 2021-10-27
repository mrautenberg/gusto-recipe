import Link from "next/link"
import { makeStyles } from "@mui/styles"

import { PER_PAGE } from "@/config/index"

import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const useStyles = makeStyles({
	containerContent: {
		justifyContent: "space-between"
	},
	link: {
		textDecoration: "none"
	}
})

export default function Pagination({ page, total }) {
	const classes = useStyles()

	const lastPage = Math.ceil(total / PER_PAGE)

	return (
		<Grid container className={classes.containerContent}
		>
			{page > 1 && (
				<Link href={`/recipes?page=${page - 1}`}>
					<Button color="secondary" size="large">
						<a className={classes.link}>
							<ArrowBackIcon />
						</a>
					</Button>
				</Link>
			)}
			<br />
			{page < lastPage && (
				<Link href={`/recipes?page=${page + 1}`}>
					<Button color="secondary"  size="large">
						<a className={classes.link}>
							<ArrowForwardIcon />
						</a>
					</Button>
				</Link>
			)}
		</Grid>
	)
}
