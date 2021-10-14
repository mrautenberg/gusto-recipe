import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Layout from "@/components/Layout/Layout"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password });
  }

  return (
    <Layout title="User Login">
      {/* add a card */}
      <div>
        <h1>
          {/* Add icon */}
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
            />
          </div>

          {/* create submit btn */}
          <input type="submit" value="Login" />
        </form>

        <p>
          Don't have an account? <b>Register</b>
        </p>
      </div>
    </Layout>
  )
}