"use client"

import { useState, useEffect } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const AcceptModal = ({ setModalVis, item}) => {

  const [errorMsg, setErrorMsg] = useState("");


  const close = () => {
    setModalVis(false)
  }

  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    const rawFormData = {
      transationId: formData.get('transactionId'),
      amount: item.amount,
      userId: item.userId,
      type: "Withdraw",
      msg: 'Withdraw Request processed by accounts team',
      status: "COMPLETED"
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/withdraw/${item._id}?status=COMPLETED`, {
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
          setTimeout(() => {
            setModalVis(false)
          }, 3000);
        }
      }
    } catch (error) {
      setErrorMsg(error)
    }
  }


  return (
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white py-5 px-5 md:px-20 rounded-xl flex flex-col gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <div className="py-5 lg:py-5 flex flex-col items-center ">
          {errorMsg && errorMsg.length > 0 && <p className="font-medium my-5 text-red-500">{errorMsg}</p>}
          <h1 className="text-2xl	font-bold">Complete Withdraw</h1>
          <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />

          <div className=" w-full">

            <form className="md:mx-20 mt-5" onSubmit={handleForm}>
              <div className="grid gap-6 md:grid-cols-2 mb-5">

                <div>
                  <label htmlFor="transactionId" className="block mb-2 text-sm font-medium text-gray-900">Transation Id</label>
                  <input
                    type="text"
                    name="transactionId"
                    id="transactionId"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>

              </div>

              <div className="flex flex-col lg:flex-row gap-5 justify-between w-full">
                <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
                <button type="button" onClick={close} className="mt-6 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AcceptModal