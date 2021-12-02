import type { AppProps /*, AppContext */ } from "next/app"
import "../styles/globals.scss"
import styles from "../styles/app.module.scss"
import Head from "../components/Head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head aa={"aa"} bb={1} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
