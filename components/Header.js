import Link from "next/link"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import MenuIcon from "@mui/icons-material/Menu"

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Button>
              <MenuIcon />
            </Button>
          </li>
          <li>
            <Button>
              <ArrowBackIcon />
            </Button>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
