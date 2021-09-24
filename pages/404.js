import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import Layout from "@/components/Layout"

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <>
        <SearchIcon sx={{ fontSize: 200 }} />

        <Typography variant="h1">Sorry, there is nothing here</Typography>
        <Typography variant="h4" component="p">
          Try searching for something else, or visit another URL
        </Typography>
        <Link href="/">Go Back Home</Link>
      </>
    </Layout>
  )
}
