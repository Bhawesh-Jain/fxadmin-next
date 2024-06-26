"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import IconPicker from 'react-icons-picker'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const AddService = () => {

    const [value, setValue] = useState("FaUsers")
    const [errorMsg, setErrorMsg] = useState("");

    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const icon = value
        const rawFormData = {
            name: formData.get('name'),
            icon: icon,
            description: formData.get('subject')
        }

        try {
            const res = await fetch(`${baseUrl}/api/dashboard/service`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(rawFormData),
            });

            console.log(res);
            if (res.ok) {
                const body = await res.json();

                console.log(body);
                setErrorMsg(body.message)
                if (body.status) {
                    router.back();
                }
            }
        } catch (error) {
            setErrorMsg(error)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <div className="p-5 md:p-6 lg:px-10 lg:py-14 flex flex-col items-center ">
            <h1 className="text-2xl md:text-3xl	font-bold">Add Service</h1>
            <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />

            <div className="p-4 w-full">

                <div className="md:mx-20">
                    <label htmlFor="icon" className="block mb-2 text-sm font-medium text-gray-900">Service Image</label>
                    <div className="hidden md:block" id="icon">
                        <IconPicker
                         modalWrapperStyle={{marginLeft: 15 + 'em', height: 500 + 'px'}} 
                         value={value} onChange={(v) => setValue(v)} />
                    </div>

                    <div className="md:hidden" id="icon">
                        <IconPicker value={value} onChange={(v) => setValue(v)} />
                    </div>
                </div>

                <form className="md:mx-20 mt-5" onKeyDown={handleKeyDown} onSubmit={handleForm}>
                    <div className="grid gap-6 md:grid-cols-1 mb-5">

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Service Name</label>
                            <input type="name" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>

                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea type="text" name="subject" rows="10" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>

                    <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                </form>

                {errorMsg && errorMsg.length > 0 && <p className="text-red-500">{errorMsg}</p>}
            </div>

        </div>
    )
}

export default AddService