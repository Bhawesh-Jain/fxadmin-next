import ServiceItem from "@/app/ui/Service/serviceItem"

const Services = () => {
    return (
        <div className="flex flex-col items-center px-2">
        <h2 className="text-2xl font-bold my-5">Services</h2>

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