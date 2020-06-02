import React from "react"
import SEO from './seo'
import Header from './header'
import Footer from "./footer"
import '../style.css'
import styles from './layout.module.css'

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