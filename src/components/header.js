import React from "react"

const SunIcon = () => {
  return (
    <svg className="w-10" fill="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="#fff"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
  )
}

const Title = () => {
  return (
    <div className="flex justify-center items-center">
      <SunIcon />
      <h1 className="text-white font-bold ml-1">Local Weather Report</h1>
    </div>
  )
}

const Header = () => {
  return (
    <header className="h-20 flex justify-center">
      <Title />
    </header>
  )
}

export default Header;