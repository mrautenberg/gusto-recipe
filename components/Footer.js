import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; Gusto 2021</p>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About this project</Link>
      <br />
      <Link href="/privacy">Privacy Policy</Link>
      <br />
      <Link href="/contact">Contact Gusto</Link>
    </footer>
  )
}
