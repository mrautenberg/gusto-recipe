import Layout from "@/components/Layout/Layout"
import Link from "next/link"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function SettingsPage() {
  return (
    <Layout title="Settings">
      <h1>Settings</h1>
      {/* change card type and add img */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            My Profile
          </Typography>
          <Typography variant="h5" component="div">
            Name Name
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            myname@email.com
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            phone: 123 45 67
          </Typography>
          <Typography variant="body2">
            address: Street 123
            <br />
            city: Metropolis
            <br />
            country: Roman Empire
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Change</Button>
        </CardActions>
      </Card>
      <br />
      <Link href="/privacy">Privacy Policy</Link>
      <br />
      <Link href="/contact">Contact Us</Link>
    </Layout>
  )
}
