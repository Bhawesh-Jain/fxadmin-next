"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import SavedIcon from "../savedIcon/SavedIcon";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const ServiceItem = ({ item }) => {
    const router = useRouter()
    const iconName = item.icon
    const library = iconName.slice(0, 2).toLowerCase();

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure?")
        if (confirmed) {
            const res = await fetch(`${baseUrl}/api/dashboard/service?id=${item._id}`, {
                method: "DELETE"
            });
            router.refresh();
        }
    }

    return (
        <div className="text-black m-3 p-3 h-full border justify-between border-solid border-gray-300 rounded-lg bg-white flex flex-col items-center">
            <div className="mt-5">
                <SavedIcon library={library} icon={iconName} />
            </div>

            <h1 className="text-center font-bold mt-8 mb-4 text-lg">{item.name}</h1>

            <p className="text-center text-sm mb-4 text-wrap	">{item.description}</p>

            <div className="flex flex-row gap-3 my-3 w-full items-center justify-around">
                <Link href={`/dashboard/service/edit/${item._id}`} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-1/3 bg-green-500`}>
                    Edit
                </Link>
                <button onClick={handleDelete} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-1/3 bg-red-500`}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ServiceItem;
