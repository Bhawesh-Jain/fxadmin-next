const PrimaryBtn = ({text, color, width}) => {
    return (
        <div className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-${width} bg-${color}-500`}>
            {text}
        </div>
    )
}

export default PrimaryBtn