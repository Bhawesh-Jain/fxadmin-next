"use client"
import { useRouter } from "next/navigation"
import PrimaryBtn from "../Skeleton/PrimaryBtn/PrimaryBtn"
import RedirectBtn from "../Skeleton/RedirectBtn/RedirectBtn"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const UserItem = ({ item }) => {

    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure?")
        if (confirmed) {
            await fetch(`${baseUrl}/api/dashboard/user?id=${item._id}`, {
                method: "DELETE"
            });
            router.refresh();
        }
    }

    return (
        <div className="flex flex-col w-full gap-1 mb-3 p-3 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between">
                <h2 className="font-medium text-base">{item.name}</h2>

                <h2 className={`font-medium text-base ${item.status === "Active" && "text-green-500"} ${item.status === "Pending" && "text-red-500"}`}>{item.status}</h2>
            </div>
            <p>{item.phone}</p>
            <p>{item.email}</p>

            <div className="grid grid-cols-2 lg:grid-cols-3 text-sm items-center justify-around gap-5 mt-4">
                <div className="hidden bg-green-500 "></div>
                <div className="hidden bg-blue-500 "></div>
                <RedirectBtn link={`./dashboard/user/edit/${item._id}`} color="green-500" text="View" width="" />
                <PrimaryBtn color="blue" text="Add loan" width="" />
                <button onClick={handleDelete} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} bg-red-500`}>
                    Delete
                </button>
                <RedirectBtn link={`./dashboard/user/transactions/${item._id}`} color="blue-500" text="Transactions" width="" />
                <RedirectBtn link={`./dashboard/user/trade/${item._id}`} color="red-500" text="Trades" width="" />
                <RedirectBtn link={`./dashboard/user/investment/${item._id}`} color="green-500" text="Investement" width="" />
            </div>
        </div>
    )
}

export default UserItem