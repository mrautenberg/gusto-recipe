import { makeStyles } from "@mui/styles"

import Typography from "@mui/material/Typography"
import Layout from "@/components/Layout/Layout"

const useStyles = makeStyles({
  paragraph: {
    marginBottom: "1rem",
  },
})

export default function PrivacyPage() {
  const classes = useStyles()

  return (
    <Layout title="Privacy Policy">
      <article>
        <Typography
          variant="h3"
          gutterBottom
          component="h1"
        >
          Integritetspolicy
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.paragraph}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia at
          eaque est numquam voluptas expedita.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.paragraph}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          distinctio dolores quis incidunt a unde doloremque ipsam possimus
          veritatis in dolorum soluta non explicabo, omnis, mollitia quidem.
          Autem, soluta labore.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.paragraph}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          accusantium, nulla exercitationem placeat nesciunt dignissimos culpa
          voluptate numquam voluptatum quos!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.paragraph}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          delectus cupiditate ipsa maxime ratione quod dolores tenetur libero
          saepe.
        </Typography>
      </article>
    </Layout>
  )
}
