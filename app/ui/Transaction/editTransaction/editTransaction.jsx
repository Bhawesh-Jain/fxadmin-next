"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const EditTransactionForm = ({ item }) => {
    const router = useRouter()

    const [errorMsg, setErrorMsg] = useState("");


    const cancelEdit = async () => {
        router.back();
    }
    const handleForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);


        const rawFormData = {
            transationId: formData.get('transactionId'),
            amount: formData.get('transationAmount'),
            msg: formData.get('msg'),
            status: formData.get('status')
        }

        try {
            const res = await fetch(`${baseUrl}/api/dashboard/transaction/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(rawFormData),
            });

            if (res.ok) {
                const body = await res.json();

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
        <div className="py-20 md:p-6 lg:px-10 lg:py-14 flex flex-col items-center ">
            <h1 className="text-2xl md:text-3xl	font-bold">Edit Transaction</h1>
            <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />

            <div className="p-4 w-full">

                <form className="md:mx-20 mt-5" onKeyDown={handleKeyDown} onSubmit={handleForm}>
                    <div className="grid gap-6 md:grid-cols-2 mb-5">

                        <div>
                            <label htmlFor="transactionId" className="block mb-2 text-sm font-medium text-gray-900">Transation Id</label>
                            <input defaultValue={item.transactionId} type="text" name="transactionId" id="transactionId" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>

                        <div>
                            <label htmlFor="transationAmount" className="block mb-2 text-sm font-medium text-gray-900">Transaction Amount</label>
                            <input defaultValue={item.amount} type="text" name="transationAmount" id="transationAmount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>

                        <div>
                            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                            <select defaultValue={item.status} id="status" name="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option defaultValue="">Select Status</option>
                                <option value="PENDING">PENDING</option>
                                <option value="COMPLETED">COMPLETED</option>
                                <option value="REJECTED">REJECTED</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="msg" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                        <textarea defaultValue={item.msg} type="text" name="msg" rows="4" id="msg" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>


                    <div className="flex flex-col lg:flex-row gap-5 justify-between w-full">
                        <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                        <button type="button" onClick={cancelEdit} className="mt-6 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</button>
                    </div>
                </form>

                {errorMsg && errorMsg.length > 0 && <p className="text-red-500">{errorMsg}</p>}
            </div>

        </div>
    )
}

export default EditTransactionForm