import { useState } from "react"
import { useRouter } from "next/router"
import { parseCookies } from "@/helpers/index"

import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import Button from "@mui/material/Button"

export default function EditPantryPage({ item, token }) {
  const router = useRouter()

  const [values, setValues] = useState({
    title: item.title,
    quantity: item.quantity,
    unit: item.unit,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation (if true we want an error)
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    )

    if (hasEmptyFields) {
      console.error("Please fill in all fields")
    }

    const res = await fetch(`${API_URL}/pantries/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        alert("Unauthorized")
        return
      }
      alert("Error")
    } else {
      const ingr = await res.json()
      router.push(`/account/pantry`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Spread out what's already there and assign name it's value
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout>
      <h1>Edit Ingredient</h1>
      <form onSubmit={handleSubmit}>
        {/* Add grid */}
        <div className="styles.grid">
          <label htmlFor="title">Ingredient</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={values.quantity}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={values.unit}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Update" />
      </form>

      <Button variant="contained" onClick={() => router.push("/pantry")}>
        Back to Pantry
      </Button>
    </Layout>
  )
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/pantries/${id}`)
  const item = await res.json()

  return {
    props: {
      item,
      token
    },
  }
}
