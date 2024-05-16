import ServiceItem from "@/app/ui/Service/serviceItem"
import PrimaryBtn from "@/app/ui/Skeleton/PrimaryBtn/PrimaryBtn"
import Link from "next/link"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Services = async () => {
    const res = await fetch(`${baseUrl}/api/dashboard/service`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-type": "application/json"
        }
    });

    let list = []

    if (res.ok) {
        let body = await res.json()

        list = body.data
    }

    return (
        <div className="flex flex-col items-center px-2">
            <h2 className="text-2xl font-bold my-5">Services</h2>

            <Link href="../dashboard/service/add"><PrimaryBtn color={"blue"} text={"Add New"} /></Link>

            <div className="grid grid-cols-2 items-center overflow-y-auto w-full mt-5">
                {
                    list.map(item => (
                        <ServiceItem key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services