import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import Container from "@mui/material/Container"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <>
        <Container maxWidth="xs">
          <Header />
          <>{children}</>
          <Footer />
        </Container>
      </>
    </div>
  )
}

Layout.defaultProps = {
  title: "Gusto | Yay, recipes",
  description: "Turn food waste into great tasting food",
  keywords: "recipe, cooking, pantry, food",
}
