"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const FooterForm = ({ paymentItem }) => {

  const router = useRouter()

  const [address, setAddress] = useState(paymentItem.address);
  const [contact, setContact] = useState(paymentItem.contact);
  const [email, setEmail] = useState(paymentItem.email);
  const [errorMsg, setErrorMsg] = useState("");


  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const updateQr = async () => {
    const rawFormData = {
      address: address,
      contact: contact,
      email: email
    }
    try {
      const res = await fetch(`${baseUrl}/api/dashboard/footer/all`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(rawFormData),
      });

      if (res.ok) {
        const body = await res.json();

        setErrorMsg(body.message)
        setTimeout(() => {
          router.refresh();
          setErrorMsg("")
        }, 3000);
      }
    } catch (error) {
      setErrorMsg(error)
    }
  }

  return (
    <div className="px-3 py-16 md:p-8 flex-col flex gap-4  w-full items-center">
      <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900">
        <h1 className="text-xl font-bold text-center my-5">
          Upload Qr
        </h1>
      </label>
      {errorMsg && errorMsg.length > 0 && <p className="text-base font-medium ">{errorMsg}</p>}

      <div className="text-black flex flex-col gap-2 items-start w-full text-start">
        <h1 className="font-bold">Footer </h1>     


        <div className="w-full">
          <label htmlFor="upiId" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            defaultValue={email}
            type="text"
            onChange={handleEmailChange}
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>

        <div className="w-full">
          <label htmlFor="upiId" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
          <input
            defaultValue={contact}
            type="text"
            onChange={handleContactChange}
            name="contact"
            id="contact"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>

        <div className="w-full">
          <label htmlFor="upiId" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
          <textarea
            defaultValue={address}
            type="text"
            rows={4}
            onChange={handleAddressChange}
            name="address"
            id="address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>

      </div>
      <button
        onClick={updateQr}
        className="w-2/3 md:w-1/3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
    </div>
  )
}

export default FooterForm