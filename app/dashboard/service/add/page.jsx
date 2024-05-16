"use client"

import { useState } from "react"

import IconPicker from 'react-icons-picker'


const AddService = () => {
    const [value, setValue] = useState("FaUsers")

    const handleForm = async(formData) => {
        
    }

    return (
        <div className="p-5 md:p-6 lg:px-10 lg:py-14 flex flex-col items-center ">
            <h1 className="text-2xl md:text-3xl	font-bold">Add Service</h1>
            <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />

            <div className="p-4 w-full">
                <form className="md:mx-20" action={handleForm}>
                    <div className="grid gap-6 md:grid-cols-1 mb-5">

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Service Name</label>
                            <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Service Image</label>
                            <div className="z-40">
                                <IconPicker value={value} onChange={(v) => setValue(v)} />
                            </div>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea type="text" name="subject" rows="10" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>

                    <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddService