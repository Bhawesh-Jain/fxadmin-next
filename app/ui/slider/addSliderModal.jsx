"use client"

import { useState } from "react"
import IconPicker from 'react-icons-picker'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const AddSliderModal = ({ setModalVis }) => {

  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState("FaUsers")


  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const rawFormData = {
      icon: value,
      name: formData.get('name'),
      description: formData.get('description'),
      amount: formData.get('amount'),
      ask: formData.get('ask'),
      bid: formData.get('bid')
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/slider/create`, {
        method: "POST",
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
          setModalVis(false)
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
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col items-center gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <h1 className="text-lg font-bold">Add Trade</h1>
        {errorMsg && <p className="text-red-500 font-medium">{errorMsg}</p>}
        <label htmlFor="icon" className="block mb-2 text-sm font-medium text-gray-900">Slider Image</label>
        <div className="hidden md:block" id="icon">
          <IconPicker
            modalWrapperStyle={{ marginLeft: 15 + 'em', height: 500 + 'px' }}
            value={value} onChange={(v) => setValue(v)} />
        </div>
        <div className="md:hidden" id="icon">
          <IconPicker value={value} onChange={(v) => setValue(v)} />
        </div>
        <form className="w-full" onKeyDown={handleKeyDown} onSubmit={submitTrade}>

          <div className="grid gap-6 md:grid-cols-2 mb-5">



            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Display name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>


            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="ask" className="block mb-2 text-sm font-medium text-gray-900">Ask</label>
              <input
                type="number"
                name="ask"
                id="ask"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="bid" className="block mb-2 text-sm font-medium text-gray-900">Bid</label>
              <input
                type="number"
                name="bid"
                id="bid"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
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

export default AddSliderModal