import { useState } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@mui/styles"

import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

import SearchIcon from "@mui/icons-material/Search"

const useStyles = makeStyles({
  header: {
    margin: "1.5rem 0",
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

export default function Search() {
  const classes = useStyles()

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
    <div className={classes.marginTop}>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTerm(e.target.value)}
          label={label}
          fullWidth
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </form>
    </div>
  )
}
