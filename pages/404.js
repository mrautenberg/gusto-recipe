import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import Link from "next/link"
import Layout from "@/components/Layout"
import styles from "@/styles/404.module.css"

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <AccessAlarmIcon /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  )
}
