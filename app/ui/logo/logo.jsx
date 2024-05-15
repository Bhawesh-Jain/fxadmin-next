import Image from "next/image"

const Logo = () => {
    return (
        <div className="flex flex-row gap-2">
            <Image
                src="/logo-icon.jpg"
                width={35}
                height={35}
                alt=""
                className="rounded-full"
            />
            <div className="flex flex-col text-xs">
                <span className="font-medium text-sm">IForex</span>
                <span className="">Growell your trading</span>
            </div>
        </div>
    )
}

export default Logo