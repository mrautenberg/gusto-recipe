import Layout from "@/components/Layout/Layout"
import Button from "@mui/material/Button"
import Search from "@/components/Search"

import { useRouter } from "next/router"

export default function AddToPantryPage() {
  const router = useRouter()

  return (
    <Layout title="Add To Pantry">
      <h1>Add To Pantry</h1>
      <Search />
      <br />
      <Button variant="contained" onClick={() => router.push("/pantry")}>
        Back to Pantry
      </Button>
    </Layout>
  )
}
