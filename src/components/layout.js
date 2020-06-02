import React from "react"
import SEO from './seo'
import Header from './header'
import 'tailwindcss/tailwind.css'
import styles from './layout.module.css'
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout