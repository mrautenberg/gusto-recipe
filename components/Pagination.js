import Link from "next/link"

import { PER_PAGE } from "@/config/index"

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <>
      {page > 1 && (
        <Link href={`/recipes?page=${page - 1}`}>
          <a>Prev</a>
        </Link>
      )}
      <br />
      {page < lastPage && (
        <Link href={`/recipes?page=${page + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </>
  )
}
