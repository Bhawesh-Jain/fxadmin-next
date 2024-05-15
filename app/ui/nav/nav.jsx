"use client"
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Sidebar from "./sidebar/sidebar";
import Logo from "../logo/logo";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    let handleMenuClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div>
            <div className="md:hidden fixed w-full bg-white">
                <div className=" flex flex-row justify-between items-center p-4">
                    <Logo />
                    <MdMenu size={25} className="" onClick={handleMenuClick} />
                </div>
            </div>

            <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
    )
}

export default Nav