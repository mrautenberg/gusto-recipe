import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { API_URL } from "@/config/index"

import Layout from "@/components/Layout/Layout"
import Button from "@mui/material/Button"
import Search from "@/components/Search"

export default function AddToPantryPage() {
  const router = useRouter()

  const [values, setValues] = useState({
    title: "",
    quantity: "",
    unit: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation (if true we want an error)
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    )

    if (hasEmptyFields) {
      // Add error message through mui or use toastify
      console.error("Please fill in all fields")
    }

    const res = await fetch(`${API_URL}/pantries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      console.error("Error")
    } else {
      const ingr = await res.json()
      router.push(`/pantry/${ingr.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    // Spread out what's already there and assign name it's value
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title="Add To Pantry">
      <h1>Add To Pantry</h1>
      <Search />
      <br />
      <form onSubmit={handleSubmit}>
        {/* Add grid */}
        <div className="styles.grid">
          <label htmlFor="title">Ingredient</label>
          <input
            type="text"
            id="title"
            // We have the name attri so we don't have to change the name for every sinle input
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
        <input type="submit" value="Add" />
      </form>

      <Button variant="contained" onClick={() => router.push("/pantry")}>
        Back to Pantry
      </Button>
    </Layout>
  )
}
