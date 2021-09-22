import Link from "next/link"
import styles from "@/styles/Header.module.css"

// @TODO: ADD NAVBAR

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Gusto</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
