import React from "react";

type NavProps = {
  children?: React.ReactNode
}
const Navbar: React.FC<NavProps> = ({children}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {children}
      </ul>
    </nav>
  )
}

export default Navbar
