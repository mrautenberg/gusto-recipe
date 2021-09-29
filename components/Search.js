import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"

export default function Search() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search" variant="standard" />
      </Box>
    </>
  )
}
