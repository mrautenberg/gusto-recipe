const { events } = require("./data.json")

export default function handler(req, res) {
  // Get a single event with a slug
  const evt = events.filter((ev) => ev.slug === req.query.slug)

  // Limit method
  if (req.method === "GET") {
    res.status(200).json(evt)
  } else {
    // Limit which methods that are allowed
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
