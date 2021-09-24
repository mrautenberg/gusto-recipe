// Card in grid for individual recipe

import Link from "next/link"
import Image from "next/image"

export default function RecipeItem({ rcp }) {
  return (
    <div>
      <div>
        <Image
          src={rcp.image || "/images/recipe-default.jpg"}
          width={170}
          height={100}
        />
      </div>

      <div>
        <h3>{rcp.title}</h3>
        <p>text will be added</p>
      </div>

      <div>
        <Link href={`/recipes/${rcp.slug}`}>
          <a>Details</a>
        </Link>
      </div>
    </div>
  )
}
