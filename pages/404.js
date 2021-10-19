import { makeStyles } from "@mui/styles"

import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "next/link"
import Layout from "@/components/Layout/Layout"

const useStyles = makeStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonLink: {
    textDecoration: "none",
    color: "black",
  },
})

export default function NotFoundPage() {
  const classes = useStyles()

  return (
    <Layout title="Page Not Found">
      <>
        <div className={classes.contentContainer}>
          <SearchIcon sx={{ fontSize: 200 }} />
          <Typography variant="h3" component="h1">
            Not found
          </Typography>
          <Typography
            variant="body1"
            component="p"
            textAlign="center"
            sx={{ margin: "1.5rem 0" }}
          >
            Please try searching for something else.
          </Typography>
          <Button fullWidth>
            <Link href="/">
              <a className={classes.buttonLink}>Back to start</a>
            </Link>
          </Button>
        </div>
      </>
    </Layout>
  )
}
