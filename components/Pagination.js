import Link from "next/link"

import { PER_PAGE } from "@/config/index"

import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <Grid
      container
      style={{ justifyContent: "space-between" }}
    >
      {page > 1 && (
        <Link href={`/recipes?page=${page - 1}`}>
          <Button size="large">
            <a style={{ textDecoration: "none" }}>
              <ArrowBackIcon />
            </a>
          </Button>
        </Link>
      )}
      <br />
      {page < lastPage && (
        <Link href={`/recipes?page=${page + 1}`}>
          <Button size="large">
            <a style={{ textDecoration: "none" }}>
              <ArrowForwardIcon />
            </a>
          </Button>
        </Link>
      )}
    </Grid>
  )
}
