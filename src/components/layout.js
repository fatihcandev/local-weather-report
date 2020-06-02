import React from "react"
import SEO from './seo'
import Header from './header'
import 'tailwindcss/tailwind.css'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen" id="layout">
      <SEO />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout;