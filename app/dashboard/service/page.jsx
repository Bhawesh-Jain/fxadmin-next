import ServiceItem from "@/app/ui/Service/serviceItem"
import PrimaryBtn from "@/app/ui/Skeleton/PrimaryBtn/PrimaryBtn"
import Link from "next/link"

const Services = () => {
    return (
        <div className="flex flex-col items-center px-2">
        <h2 className="text-2xl font-bold my-5">Services</h2>

        <Link href="../dashboard/service/add"><PrimaryBtn color={"blue"} text={"Add New"}/></Link>

        <div className="grid grid-cols-2 items-center overflow-y-auto w-full">
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
        </div>
    </div>
    )
}

export default Services