import Layout from "@/components/Layout"
import Typography from "@mui/material/Typography"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"

export default function ContactPage() {
  return (
    <Layout title="Contact us">
      <>
        <Typography variant="h3" component="h1">
          Contact Us
        </Typography>
        <Typography variant="h5" component="h2">
          <EmailIcon /> email
        </Typography>
        <Typography variant="body1" component="p">
          hello@gusto.dev
        </Typography>
        <Typography variant="h5" component="h2">
          <PhoneIcon /> phone
        </Typography>
        <Typography variant="body1" component="p">
          +46 123 45 67
        </Typography>
      </>
    </Layout>
  )
}
