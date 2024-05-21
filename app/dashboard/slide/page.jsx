import Link from "next/link"
import PrimaryBtn from "@/app/ui/Skeleton/PrimaryBtn/PrimaryBtn"
import ServiceItem from "@/app/ui/Service/serviceItem"
import Body from "./body/body"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Slider = async () => {

    const res = await fetch(`${baseUrl}/api/dashboard/slider/all`, {
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
            <h2 className="text-2xl font-bold my-5">Slider</h2>
            <Body list={list} />
        </div>
    )
}

export default Slider