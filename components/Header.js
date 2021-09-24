import Link from "next/link"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

export default function Header() {
  return (
    <header>
      <nav>
        <Box sx={{ flexGrow: 1, flex: 1, marginBottom: "7rem" }}>
          <AppBar position="fixed">
            <Toolbar>
              <Button color="inherit">
                <ArrowBackIcon />
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </header>
  )
}
