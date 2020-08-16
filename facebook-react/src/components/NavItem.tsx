import React, {useState} from "react";

type NavItemProps = {
  icon: React.ReactNode
  children?: React.ReactNode
}
const NavItem: React.FC<NavItemProps> = ({icon, children}) => {
  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  )
}

export default NavItem
