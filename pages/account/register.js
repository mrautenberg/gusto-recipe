import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Layout from "@/components/Layout/Layout"

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      alert("Passwords do not match!")
      return
    }

    console.log({ email, username, password });
  }

  return (
    <Layout title="User Registration">
      {/* add a card */}
      <div>
        <h1>
          {/* Add icon */}
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              value={username}
            />
          </div>
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
          <div>
            <label htmlFor="passwordConfirm">Confirm Password </label>
            <input
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
            />
          </div>

          {/* create submit btn */}
          <input type="submit" value="Login" />
        </form>

        <p>
          Already have an account? <b>Sign In</b>
        </p>
      </div>
    </Layout>
  )
}