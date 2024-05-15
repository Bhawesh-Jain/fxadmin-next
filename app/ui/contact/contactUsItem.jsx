const ContactUsItem = () => {
    return (
        <div className="flex flex-col w-full p-3 my-3 border-b border-gray-200 gap-2">

            <h2 className="text-base font-medium text-black">Name of the user</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                <p>9876543210</p>
                <p>test@gmail.com</p>

            </div>

            <h1 className="font-medium text-black">Subject Entered by the user</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis quos nemo vitae distinctio nam ab quasi perspiciatis quis fuga, asperiores magni praesentium libero, facere consequuntur, eaque consectetur fugit! Iste, enim totam sapiente explicabo non cum debitis minus maiores doloribus!</p>

            <div className="flex flex-row gap-2">Date: <h1 className="font-medium text-black">24-04-2024</h1></div>

        </div>
    )
}

export default ContactUsItem