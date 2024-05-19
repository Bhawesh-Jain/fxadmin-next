"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import AddLoanModal from "../AddLoanModal/addLoanModal"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const LoanItem = ({ item, userId }) => {

  const router = useRouter()
  const [acceptLoan, setAcceptLoan] = useState(false);

  const handleReject = () => {
    var status = "Rejected"

    updateStatus(status)
  }

  const handleAccept = () => {
    setAcceptLoan(true)
  }

  const updateStatus = async (status) => {
    const rawFormData = {
      loanStatus: status,
      userId: item.userId,
      id: item._id
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/user/loan?id=${item.userId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(rawFormData),
      });

      if (res.ok) {
        const body = await res.json();

        if (body.status) {
          router.refresh()
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full py-2 text-xs md:text-sm border-b-2 border-gray-100 flex flex-col lg:flex-row lg:gap-14 gap-4 justify-between">
      <div className="flex flex-col w-full gap-1 mb-3 p-3">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="font-medium text-base">{item.msg}</h2>

          <h2 className={`font-medium text-base ${item.status === "Active" && "text-green-500"} ${item.status === "Pending" && "text-red-500"}`}>{item.status}</h2>
        </div>
        <p>{item.userId}</p>
        <p>{item.amount}</p>

      </div>

      {item.status !== "Accepted" && item.status !== "Rejected" &&
        <div className="flex w-full lg:w-1/4 flex-row lg:flex-col justify-evenly gap-3 items-center text-sm ">
          <button onClick={handleAccept} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-green-500`}>
            Accept
          </button>
          <button onClick={handleReject} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-red-500`}>
            Reject
          </button>
        </div>
      }
      {acceptLoan && <AddLoanModal setModalVis={setAcceptLoan} item={item} userId={userId} />}


    </div>
  )
}

export default LoanItem