import { useState } from "react"
import { useRouter } from "next/router"

export default function SearchTest() {
  const [term, setTerm] = useState("")

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/recipes/search?term=${term}`)
    setTerm("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Recipes"
        />
      </form>
    </div>
  )
}
