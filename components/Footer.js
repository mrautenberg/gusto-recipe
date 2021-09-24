import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; Gusto 2021</p>
      <Link href="/about">About this project</Link>
    </footer>
  )
}
