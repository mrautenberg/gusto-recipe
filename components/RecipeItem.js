import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/RecipeItem.module.css"

export default function RecipeItem({ rcp }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={rcp.image ? rcp.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {rcp.date} at {rcp.time}
        </span>
        <h3>{rcp.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/recipes/${rcp.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  )
}
