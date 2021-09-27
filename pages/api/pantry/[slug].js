const { pantry } = require("./data.json")

export default function handler(req, res) {
  // Get a single event with a slug
  const pty = pantry.filter((p) => p.slug === req.query.slug)

  // Limit method
  if (req.method === "GET") {
    res.status(200).json(pty)
  } else {
    // Limit which methods that are allowed
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
