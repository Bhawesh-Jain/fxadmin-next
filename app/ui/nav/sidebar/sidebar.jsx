"use client"
import * as icons from "react-icons/md"
import MenuItem from "./menuItem/menuitem"
import Logo from "../../logo/logo"
import LogoutForm from "../../logout/LogoutForm"

const Sidebar = ({openMenu = false, setOpenMenu}) => {
    const list = [
        {
            title: "Dashboard",
            icon: icons.MdDashboard,
            link: "/dashboard"
        },
        {
            title: "Transactions",
            icon: icons.MdMoney,
            link: "/dashboard/transactions"
        },
        {
            title: "Withdraw",
            icon: icons.MdMoneyOffCsred,
            link: "/dashboard/withdraw"
        },
        {
            title: "Contact Us",
            icon: icons.MdSupervisedUserCircle,
            link: "/dashboard/contact"
        },
        {
            title: "Services",
            icon: icons.MdRoomService,
            link: "/dashboard/service"
        },
        {
            title: "About Us",
            icon: icons.MdInfo,
            link: "/dashboard/about"
        },
        {
            title: "Terms & Conditions",
            icon: icons.MdPanoramaPhotosphereSelect,
            link: "/dashboard/terms"
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

            <LogoutForm />

        </div>
    )
}

export default Sidebar