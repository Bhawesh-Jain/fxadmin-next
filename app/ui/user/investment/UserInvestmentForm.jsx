"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const UserInvestmentForm = ({ item }) => {

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
      investmentAmount: formData.get('investmentAmount'),
      marketValue: formData.get('marketValue'),
      overallGain: formData.get('overallGain'),
      profit: formData.get('profit')
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
          router.back()
        }

      }

    } catch (error) {
      throw new Error(error)
    }

  }

  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-screen-lg xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {errorMsg && errorMsg.length > 0 && <p className="text-base font-medium text-red-500">{errorMsg}</p>}
            <div className="flex flex-col md:flex-row items-start gap-3 justify-between">
              <h2 className="font-medium text-base">{item.name}</h2>
            </div>
            <form className="space-y-4 md:space-y-6" action={handleForm}>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <div className="w-full">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Investment Amount</label>
                  <input
                    defaultValue={item.investmentAmount}
                    type="number"
                    name="investmentAmount"
                    id="investmentAmount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required />
                </div>

                <div className="w-full">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Market Value</label>
                  <input
                    defaultValue={item.marketValue}
                    type="number"
                    name="marketValue"
                    id="marketValue"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required />
                </div>

                <div className="w-full">
                  <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900">Overall Gain</label>
                  <input
                    defaultValue={item.overallGain  }
                    type="number"
                    name="overallGain"
                    id="overallGain"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required />
                </div>

                <div className="w-full">
                  <label htmlFor="pan" className="block mb-2 text-sm font-medium text-gray-900">Profit</label>
                  <input
                    defaultValue={item.profit}
                    type="number"
                    name="profit"
                    id="profit"
                    className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required />

                </div>

              </div>


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInvestmentForm