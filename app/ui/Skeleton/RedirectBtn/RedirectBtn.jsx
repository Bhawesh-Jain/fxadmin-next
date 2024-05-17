import Link from "next/link"

const RedirectBtn = ({ link, color, width, text}) => {
    return (
        <Link href={link} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-${width} bg-${color}`}>
            {text}
        </Link>
    )
}

export default RedirectBtn