import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import IconButton from "@mui/material/IconButton"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

export default function Footer() {
	return (
		<footer>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={1}
				
			>
				<IconButton aria-label="Facebook" size="large" color="secondary">
					<FacebookIcon fontSize="inherit" />
				</IconButton>
				<IconButton aria-label="Instagram" size="large" color="secondary">
					<InstagramIcon fontSize="inherit" />
				</IconButton>
				<IconButton aria-label="Twitter" size="large" color="secondary">
					<TwitterIcon fontSize="inherit" />
				</IconButton>
				<IconButton aria-label="Youtube" size="large" color="secondary">
					<YouTubeIcon />
				</IconButton>
			</Stack>
			<Typography
				variant="body1"
				sx={{ textAlign: "center" }}
			>
				Copyright &copy; Gusto 2021
			</Typography>
		</footer>
	)
}
