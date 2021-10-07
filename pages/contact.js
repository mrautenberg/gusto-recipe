import { makeStyles } from "@mui/styles"

import Layout from "@/components/Layout/Layout"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"

const useStyles = makeStyles({
  labelContainer: {
    display: "flex",
    alignItems: "center",
  },
  labelIcon: {
    display: "flex",
    alignItems: "center",
  },
  mb1: {
    marginBottom: "1rem",
  },
})

export default function ContactPage() {
  const classes = useStyles()

  return (
    <Layout title="Contact us">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            Kontakta oss
          </Typography>
          <div className={classes.labelContainer}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.labelIcon}
            >
              <EmailIcon sx={{ marginRight: "0.5rem" }} /> Epost
            </Typography>
          </div>
          <Typography className={classes.mb1} variant="body1" component="p">
            hello@gusto.dev
          </Typography>
          <div className={classes.labelContainer}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.labelIcon}
            >
              <PhoneIcon sx={{ marginRight: "0.5rem" }} /> Telefon
            </Typography>
          </div>
          <Typography variant="body1" component="p">
            070 123 45 67
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}
