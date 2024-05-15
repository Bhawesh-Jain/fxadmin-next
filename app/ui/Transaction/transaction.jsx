import { MdCallReceived } from "react-icons/md";
import PrimaryBtn from "../Skeleton/PrimaryBtn/PrimaryBtn";

const Transaction = ({ item }) => {
   return (
      <div className="w-full py-2 text-xs border-b-2 border-gray-100 flex flex-col">

         <div className="flex flex-row justify-between">

            <div className="flex flex-col justify-around w-full md:w-auto px-2">
               <div>
                  <span className="font-medium text-base">Paid</span>
                  <p className="my-1">Whatever msg is to be shown</p>
                  <p className="my-1">Transaction Id: FKSDLkdsfjl</p>
                  <p className="my-1">Status: PENDING</p>
                  <div className="my-2">
                     Date:14-05-2024 21:40
                  </div>
               </div>
            </div>

            <div className="flex flex-col justify-end items-end">
               <span className="text-center md:text-start">Transaction Amount: 1000</span>
               <span className=" m-auto rotate-180 mx-auto bg-blue-500 rounded-lg">
                  <MdCallReceived size={60} className="filter p-4 fill-white" />
               </span>
            </div>

         </div>

         <div className="flex flex-row justify-evenly gap-3 items-center text-sm ">
            <div className="hidden w-1/4"></div>
            <PrimaryBtn text="Accept" color="green" width="1/4" />
            <PrimaryBtn text="Reject" color="red" width="1/4"/>
         </div>

      </div>
   )
}

export default Transaction;
