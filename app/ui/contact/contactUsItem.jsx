const ContactUsItem = ({item}) => {
    return (
        <div className="flex flex-col w-full p-3 my-3 border-b border-gray-200 gap-2">

            <h2 className="text-base font-medium text-black">{item.name}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                <p>{item.phone}</p>
                <p>{item.email}</p>

            </div>

            <h1 className="font-medium text-black">{item.subject}</h1>
            <p className="">{item.description}</p>

            <div className="flex flex-row gap-2">Date: <h1 className="font-medium text-black">24-04-2024</h1></div>

        </div>
    )
}

export default ContactUsItem