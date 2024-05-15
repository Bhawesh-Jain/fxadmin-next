"use client"
import * as icons from "react-icons/md"
import MenuItem from "./menuItem/menuitem"
import Logo from "../../logo/logo"

const Sidebar = ({openMenu = false, setOpenMenu}) => {
    const list = [
        {
            title: "Dashboard",
            icon: icons.MdDashboard,
            link: "/"
        },
        {
            title: "Transactions",
            icon: icons.MdMoney,
            link: "/transactions"
        },
        {
            title: "Withdraw",
            icon: icons.MdMoneyOffCsred,
            link: "/withdraw"
        },
        {
            title: "Contact Us",
            icon: icons.MdSupervisedUserCircle,
            link: "/contact"
        },
        {
            title: "Services",
            icon: icons.MdRoomService,
            link: "/service"
        },
        {
            title: "About Us",
            icon: icons.MdInfo,
            link: "/about"
        },
        {
            title: "Terms & Conditions",
            icon: icons.MdPanoramaPhotosphereSelect,
            link: "/terms"
        }

    ]

    let handleBackClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={` ${"fixed top-0 md:flex flex-col h-screen bg-gray-800 w-64 z-40 text-white overflow-y-auto"} ${!openMenu && "hidden"}`}>
            <div className="p-4 flex flex-row items-center justify-between">
                <Logo />
                <icons.MdArrowBack size={20} onClick={handleBackClick} className="md:hidden filter fill-white"/>
            </div>

            {
                list.map(item => (
                    <MenuItem key={item.title} item={item} />
                ))
            }

            <button className={`${"flex flex-row items-center gap-4 rounded-md px-2 py-4 hover:bg-gray-600 m-2"}`}>
                <icons.MdLogout size={20} /> Logout
            </button>

        </div>
    )
}

export default Sidebar