import React from "react"

const Text = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <h1 className="text-xl text-white font-semibold">Made by Fatih Can with</h1>
      <a href="https://gatsbyjs.org" target="_blank noreferrer"
        className="text-xl font-semibold text-purple-500 ml-1">GatsbyJS</a>
      <h1 className="text-xl text-white font-semibold ml-1">and</h1>
      <a href="https://tailwindcss.com" target="_blank noreferrer"
        className="text-xl font-semibold text-teal-500 ml-1">Tailwind CSS</a>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="h-20 flex justify-center">
      <Text />
    </footer>
  )
}

export default Footer