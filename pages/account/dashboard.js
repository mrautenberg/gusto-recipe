import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";

import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

export default function DashboardPage({ pantry, token }) {

  const router = useRouter()

  // Move higher up and pass as props
  const deleteItem = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/pantries/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json()

      if (!res.ok) {
        console.error(data.message)
      } else {
        router.reload()
      }
    }
  }

  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>
      <h3>My pantry</h3>
      {pantry.map((pty) => (
        // ADD my pantry page & component
        // Add crud functionality
        <>
          <p> {pty.title} </p>
          <button onClick={deleteItem}>delete</button>
        </>
      ))}
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/pantries/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const pantry = await res.json()

  return {
    props: {
      pantry,
      token
    }
  }
}