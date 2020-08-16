import React from "react";
// 間に合わせ
import {ReactComponent as CaretIcon} from "../assets/caret.svg";

type DropdownMenuProps = {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
}

const DropdownMenu = () => {
  const DropDownItem: React.FC<DropdownMenuProps> = ({leftIcon, rightIcon, children}) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-button">{rightIcon}</span>
      </a>
    )
  }
  return (
    <div className="dropdown">
      <DropDownItem>my profile</DropDownItem>
      <DropDownItem leftIcon={<CaretIcon />} rightIcon={<CaretIcon />}></DropDownItem>
    </div>
  )
}

export default DropdownMenu
