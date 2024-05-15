"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const MenuItem = ({ item }) => {

    const pathname = usePathname()

    return (
        <Link href={item.link} >
            <div className={`${pathname === item.link && "bg-gray-600"} ${"flex flex-row items-center gap-4 text-white rounded-md px-2 py-4 hover:bg-gray-600 m-2"}`}>
                <item.icon size={20} /> {item.title}
            </div>
        </Link>
    )
}

export default MenuItem