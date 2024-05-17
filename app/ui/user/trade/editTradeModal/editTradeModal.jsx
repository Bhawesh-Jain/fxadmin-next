"use client"

import Error from "next/error"
import { useRouter } from "next/navigation"
import { useState } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const getTradeById = async (id) => {
  try {
      const res = await fetch(`${baseUrl}/api/dashboard/user/trade?${id}`, {
          method: "GET",
          cache: "no-store"
      });

      if (res.ok) {
          var body = await res.json()

          if (body.status) {
              return body;
          } else {
              throw new Error(body.message)
          }
      } else {
      }
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

const EditTradeModal = async ({ setModalVis, id }) => {

  const data = await getTradeById(id)

  console.log(data);

  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter()


  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const rawFormData = {
      amount: formData.get('amount'),
      buy: formData.get('buy'),
      quantity: formData.get('quantity'),
      sell: formData.get('sell'),
      profit: formData.get('profit'),
      date: formData.get('date')
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/user/trade?${id}`, {
          method: "PUT",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(rawFormData),
      });

      console.log(res);
      if (res.ok) {
          const body = await res.json();

          setErrorMsg(body.message)
          if (body.status) {
              router.refresh()
          }
      }
  } catch (error) {
      setErrorMsg(error)
  }
  }


  return (
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col items-center gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <h1 className="text-lg font-bold">Edit Trade</h1>

        <form className="w-full" onSubmit={submitTrade}>
          <div className="grid gap-6 md:grid-cols-2 mb-5">

            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Trade Amount</label>
              <input
                type="amount"
                name="amount"
                id="amount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="buy" className="block mb-2 text-sm font-medium text-gray-900">Buy Price</label>
              <input
                type="number"
                name="buy"
                id="buy"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="sell" className="block mb-2 text-sm font-medium text-gray-900">Sell Price</label>
              <input
                type="number"
                name="sell"
                id="sell"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="profit" className="block mb-2 text-sm font-medium text-gray-900">Profit/Loss</label>
              <input
                type="number"
                name="profit"
                id="profit"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
              <input
                type="text"
                name="date"
                id="date"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="dd-mm-yyyy"
                required />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <button
              type="submit"
              className="bg-blue-500 p-3 text-white w-full rounded">
              Submit
            </button>
            <button
              onClick={close}
              className="bg-red-500 p-3 text-white w-full rounded">
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default EditTradeModal