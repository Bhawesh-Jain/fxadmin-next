"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const UploadQrForm = ({ paymentItem }) => {

  const router = useRouter()

  const [upiId, setUpiId] = useState(paymentItem.upiId);
  const [errorMsg, setErrorMsg] = useState("");
  const [qr, setQr] = useState(paymentItem.qr); // State to hold the base64 QR code

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQr(reader.result.split(",")[1]); // Extract base64 string without the prefix
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setUpiId(e.target.value)
  }

  const updateQr = async () => {
    console.log(qr);
    const rawFormData = {
      upiId: upiId,
      qr: qr
    }
    try {
      const res = await fetch(`${baseUrl}/api/dashboard/upload`, {
        method: "PUT",
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
    <div className="px-3 py-16 md:p-8 flex-col flex gap-4 items-center">
      <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900">
        <h1 className="text-xl font-bold text-center my-5">
          Upload Qr
        </h1>
      </label>
      {errorMsg && errorMsg.length > 0 && <p className="text-base font-medium ">{errorMsg}</p>}

      <div className="text-black flex flex-col gap-2 items-start text-start">
        <h1 className="font-bold">Qr Code </h1>

        {paymentItem.qr && (
          <div className="mb-4 items-center p-5 border border-gray-300 rounded">
            <img src={`data:image/png;base64,${paymentItem.qr}`} alt="Payment QR Code" className="w-full md:w-2/4 h-auto md:h-1/3 mx-auto" />
          </div>
        )}

        


        <div className="w-full">
          <label htmlFor="upiId" className="block mb-2 text-sm font-medium text-gray-900">Upi Id</label>
          <input
            defaultValue={upiId}
            type="text"
            onChange={handleChange}
            name="upiId"
            id="upiId"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>

        <div className="w-full">
          <label htmlFor="upiId" className="block mb-2 text-sm font-medium text-gray-900">Upi Id</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".png"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>

      </div>
      <button
        onClick={updateQr}
        className="w-2/3 md:w-1/3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
    </div>
  )
}

export default UploadQrForm