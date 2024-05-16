const PrimaryBtn = ({text, color, width}) => {
    return (
        <button className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-${width} bg-${color}-500`}>
            {text}
        </button>
    )
}

export default PrimaryBtn