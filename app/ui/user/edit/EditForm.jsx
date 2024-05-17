"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const UserEditForm = ({ item }) => {

    const router = useRouter()

    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (errorMsg && errorMsg.length < 30) {
          const timer = setTimeout(() => {
            setErrorMsg('');
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [errorMsg])

    const handleForm = async (formData) => {


        const rawFormData = {
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            aadharNo: formData.get('aadhar'),
            panNo: formData.get('pan'),
            gender: formData.get('gender'),
            dob: formData.get('dob'),
            nomineeName: formData.get('nomineeName'),
            nomineeRelation: formData.get('nomineeRelation'),
            bankName: formData.get('bank-name'),
            accountNumber: formData.get('acc-number'),
            accountHolder: formData.get('acc-holder'),
            address: formData.get('address'),
            ifscCode: formData.get('ifsc-code')
        }

        try {
            const res = await fetch(`${baseUrl}/api/dashboard/user/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(rawFormData),
            });

            if (res.ok) {
                const body = await res.json();

                setErrorMsg(body.message)

                
            }

        } catch (error) {
            throw new Error(error)
        }

    }

    const changeStatus = async () => {

        var newStatus = "Pending"

        if (item.status === "Pending") {
            newStatus = "Active"
        }

        const rawFormData = {
            status: newStatus
        }
        try {
            const res = await fetch(`${baseUrl}/api/dashboard/user/${item._id}`, {
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
                    router.refresh()
                }
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(error)
        }
    }

    return (
        <section className="py-10">
            <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-screen-lg xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {errorMsg && errorMsg.length > 0 && <p className="text-base font-medium text-red-500">{errorMsg}</p> }
                        <div className="flex flex-col md:flex-row items-start gap-3 justify-between">
                            <h2 className="font-medium text-base">{item.name}</h2>

                            <button onClick={changeStatus} className={`${item.status === "Pending" && "bg-red-500"}
                            ${item.status === "Active" && "bg-green-500"} text-white rounded p-2 font-medium`}>{item.status}</button>
                        </div>
                        <form className="space-y-4 md:space-y-6" action={handleForm}>

                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input defaultValue={item.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your email" required />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input defaultValue={item.password} type="text" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onCopy="return false" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input defaultValue={item.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your name" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                    <input defaultValue={item.phone} type="text" pattern="\d*" inputMode="numeric" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter phone number" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900">Aadhar No.</label>
                                    <input defaultValue={item.aadharNo} type="text" pattern="\d*" inputMode="numeric" name="aadhar" id="aadhar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your aadhar no" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="pan" className="block mb-2 text-sm font-medium text-gray-900">Pan</label>
                                    <input defaultValue={item.panNo} type="text" name="pan" id="pan" className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter pan number" required />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                                    <select defaultValue={item.gender} id="category" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option defaultValue="">Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
                                    <input defaultValue={item.dob} type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="nominee-name" className="block mb-2 text-sm font-medium text-gray-900">Nominee Name</label>
                                    <input defaultValue={item.nomineeName} type="text" name="nomineeName" id="nominee-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Nominee Name" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="nominee-relation" className="block mb-2 text-sm font-medium text-gray-900">Nominee Relation</label>
                                    <input defaultValue={item.nomineeRelation} type="text" name="nomineeRelation" id="nominee-relation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Nominee Relation" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="bank-name" className="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
                                    <input defaultValue={item.bankName} type="text" name="bank-name" id="bank-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your bank name" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="acc-number" className="block mb-2 text-sm font-medium text-gray-900">Account Number</label>
                                    <input type="text" defaultValue={item.accountNumber} pattern="\d*" inputMode="numeric" name="acc-number" id="acc-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account number" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="acc-holder" className="block mb-2 text-sm font-medium text-gray-900">Account Holder</label>
                                    <input defaultValue={item.accountHolder} type="text" name="acc-holder" id="acc-holder" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account holder" required />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="ifsc-code" className="block mb-2 text-sm font-medium text-gray-900">IFSC Code</label>
                                    <input defaultValue={item.ifscCode} type="text" name="ifsc-code" id="ifsc-code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter ifsc code" required />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                    <textarea defaultValue={item.address} required id="address" name="address" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your address here"></textarea>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserEditForm