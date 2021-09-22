// Card in grid for individual recipe

import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/RecipeItem.module.css"

export default function RecipeItem({ rcp }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={rcp.image || "/images/recipe-default.jpg"}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <h3>{rcp.title}</h3>
        <p>text will be added</p>
      </div>

      <div className={styles.link}>
        <Link href={`/recipes/${rcp.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  )
}
