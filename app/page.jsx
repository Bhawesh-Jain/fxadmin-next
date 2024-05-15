"use client"
import Image from "next/image";
import Sidebar from "./ui/sidebar/sidebar";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Logo from "./ui/logo/logo";


export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  let handleMenuClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <div className="md:hidden flex flex-row justify-between items-center p-4">
        <Logo />
        <MdMenu size={25} className="" onClick={handleMenuClick} />
      </div>

      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />

    </div>
  );
}
