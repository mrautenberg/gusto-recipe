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
  labelText: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold"
  },
  labelIcon: {
    marginRight: "0.5rem"
  },
  // @TODO: Overwrite classes as in theme
  header1: {
    marginBottom: "1.5rem",
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
          <Typography
            variant="h3" 
            component="h1"
            className={classes.header1}
          >
            Kontakta oss
          </Typography>
          <div className={classes.labelContainer}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.labelText}
            >
              <EmailIcon className={classes.labelIcon} /> Epost
            </Typography>
          </div>
          <Typography 
            className={classes.mb1}
            variant="body1" 
            component="p"
          >
            hello@gusto.dev
          </Typography>
          <div className={classes.labelContainer}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.labelText}
            >
              <PhoneIcon className={classes.labelIcon} /> Telefon
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
