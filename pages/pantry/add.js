import Layout from "@/components/Layout/Layout"
import Button from "@mui/material/Button"
import Search from "@/components/Search"
// What already exists

export default function AddToPantryPage() {
  return (
    <Layout title="Add To Pantry">
      <h1>Add To Pantry</h1>
      <Search />
      <br />
      <Button variant="contained" onClick={() => console.log("take me baaack")}>
        Back to Pantry
      </Button>
    </Layout>
  )
}
