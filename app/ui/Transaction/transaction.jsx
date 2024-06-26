"use client"
import { MdCallReceived } from "react-icons/md";
import { useRouter } from "next/navigation";
import RedirectBtn from "../Skeleton/RedirectBtn/RedirectBtn";
import { useEffect, useState } from "react";
import EditTransactionModal from "./editTransactionModal/editTransactionModal";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Transaction = ({ item, id }) => {

   const router = useRouter();

   const [editModal, setEditModal] = useState(false);

   const handleAccept = async () => {
      var status = "COMPLETED"

   
      try {
         const res = await fetch(`${baseUrl}/api/dashboard/transaction/${item._id}?status=${status}`, {
            method: "PATCH",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify(item),
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

   const handleReject = async () => {
      var status = "REJECTED"

      updateStatus(status)
   }

   const updateStatus = async (status) => {
      const rawFormData = {
         status: status,
         id: item._id
      }
      try {
         const res = await fetch(`${baseUrl}/api/dashboard/user/transactions/${item.userId}`, {
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

   const handleDelete = async () => {
      const confirmed = confirm("Are you sure? ")

      if (confirmed) {
         const res = await fetch(`${baseUrl}/api/dashboard/user/transactions?id=${item._id}`, {
            method: "DELETE"
         });
         router.refresh();
      }
   }

   const getDate = (date) => {
      const dateItem = new Date(date)
      var month = dateItem.getMonth() + 1

      if (month < 10) {
         month = "0" + month
      }

      return dateItem.getDate() + "-" + month + "-" + dateItem.getFullYear()
   }

   const openEdit = () => {
      setEditModal(true)
   }

   useEffect(() => {
      if (!editModal) {
         router.refresh()
      }
   }, [editModal]);


   return (
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
               <span className={`m-auto mx-auto bg-blue-500 rounded-lg ${item.type !== "Deposit" && "rotate-180"}`}>
                  <MdCallReceived size={60} className="filter p-4 fill-white" />
               </span>
            </div>

         </div>

         {item.status === "PENDING" &&
            <div className="flex w-full lg:w-1/4 flex-row lg:flex-col justify-evenly gap-3 items-center text-sm ">
               <button onClick={handleAccept} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-green-500`}>
                  Accept
               </button>
               <button onClick={handleReject} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-red-500`}>
                  Reject
               </button>
            </div>
         }

         {item.status !== "PENDING" &&
            <div className="flex w-full lg:w-1/4 flex-row lg:flex-col justify-evenly gap-3 items-center text-sm ">
               <div className="hidden w-1/4"></div>
               <button onClick={openEdit} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-blue-500`}>
                  Edit
               </button>
               <button onClick={handleDelete} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-full bg-red-500`}>
                  Delete
               </button>
            </div>
         }
         {editModal && <EditTransactionModal setModalVis={setEditModal} item={item} />}

      </div>
   )
}

export default Transaction;
