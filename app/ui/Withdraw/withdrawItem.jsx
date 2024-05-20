"use client"
import { MdCallReceived } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AcceptModal from "./AcceptModal/AcceptModal";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const WithdrawItem = ({ item, id }) => {

  const router = useRouter();
  const [acceptModal, setAcceptModal] = useState();
  const [btn, setBtn] = useState(true);

  useEffect(() => {
    if (!acceptModal) {
      console.log("Closed");
      router.refresh()
    }
  }, [acceptModal]);

  const handleAccept = async () => {
    setAcceptModal(true)
  }

  const handleReject = async () => {
    updateStatus()
  }

  const getDate = (date) => {
    const dateItem = new Date(date)
    var month = dateItem.getMonth() + 1

    if (month < 10) {
      month = "0" + month
    }

    return dateItem.getDate() + "-" + month + "-" + dateItem.getFullYear() + " " + dateItem.toLocaleTimeString()
  }

  const updateStatus = async () => {
    setBtn(false)
    const rawFormData = {
      transactionId: 'Withdraw Rejected',
      amount: item.amount,
      userId: item.userId,
      type: "Withdraw",
      msg: 'Withdraw Request rejected by accounts team',
      status: "REJECTED",
      itemId: item._id
    }
    try {
      const res = await fetch(`${baseUrl}/api/dashboard/withdraw/${item.userId}`, {
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
      } else {
        setBtn(true)

      }
    } catch (error) {
      console.log(error);
      setBtn(true)

    }
  }

  return (
    <>
      <div className="w-full py-2 text-xs md:text-sm border-b-2 border-gray-100 flex flex-col lg:flex-row lg:gap-14 gap-4 justify-between">

        <div className="flex flex-row justify-between w-full">

          <div className="flex flex-col justify-around w-full md:w-auto px-2">
            <div>
              <span className="font-medium text-base">{item.type}</span>
              {<p className="my-1">{item.msg}</p>}
              <p className="my-1">Transaction Id: {item.transactionId}</p>
              <p className="my-1">Status: {item.status}</p>
              <div className="my-2">
                {getDate(item.createdAt)}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end z-20">
            <span className="text-center md:text-start">Transaction Amount:<p className="font-medium text-center m-1">{item.amount}</p></span>
            <span className={`m-auto mx-auto bg-blue-500 rounded-lg`}>
              <MdCallReceived size={60} className="filter p-4 fill-white" />
            </span>
          </div>

        </div>

        {item.status === "PENDING" &&
          <div className="flex w-full lg:w-1/4 flex-row lg:flex-col justify-evenly gap-3 items-center text-sm ">
            <button onClick={handleAccept} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-green-500`}>
              Accept
            </button>
            btn && <button onClick={handleReject} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-red-500`}>
              Reject
            </button>
          </div>
        }

        {acceptModal && <AcceptModal key={item._id} item={item} setModalVis={setAcceptModal} />}
      </div>
    </>

  )
}

export default WithdrawItem;
