import { useState } from "react"
import { useRouter } from "next/router"

// mui comps & layout
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

// Icons
import FilterListIcon from "@mui/icons-material/FilterList"
import SearchIcon from "@mui/icons-material/Search"

// @TODO: Take in props for label if search added in pantry
export default function Search() {
  const [term, setTerm] = useState("")
  const [label, setLabel] = useState("Search recipe")
  const router = useRouter()

  // Reset label value after submit
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/recipes/search?term=${term}`)
    setTerm("")
    setLabel("")
  }

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <form onSubmit={handleSubmit}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            onChange={(e) => setTerm(e.target.value)}
            label={label}
            variant="standard"
          />
          <FilterListIcon onClick={() => router.push("/recipes/filter")} />
        </form>
      </Box>
    </>
  )
}
