"use client"
import RedirectBtn from "@/app/ui/Skeleton/RedirectBtn/RedirectBtn"
import AddTradeModal from "@/app/ui/user/trade/addTradeModal/addTradeModal"
import TradeItem from "@/app/ui/user/trade/tradeItem"
import { useState } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const AddTrade = () => {

    const [List, setList] = useState([]);
    const [addModal, setAddModal] = useState(false);

    const fetchList = async () => {
        const res = await fetch(`${baseUrl}/api/dashboard/user`, {
            method: "GET",
            cache: "no-cache"
        });

        if (res.ok) {
            const body = await res.json();
        }
    }

    const openModal = () => {
        setAddModal(true)
    }

    return (
        <div className="px-4 py-16 md:py-4 md:px-10">

            <div className="flex flex-col md:flex-row justify-between gap-5 my-5">
                <h2 className="text-2xl font-bold ">User Trades</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <button onClick={fetchList} className="bg-blue-500 text-sm text-white rounded p-2 w-full md:w-auto">Refresh List</button>
                    <button onClick={openModal} className="bg-blue-500 text-sm text-white rounded p-2 w-full md:w-auto">Add New</button>
                </div>
            </div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-center text-nowrap whitespace-nowrap rtl:text-right text-black p-2 border border-gray-50">
                    <thead className="text-xs uppercase">
                        <tr className="">
                            <th scope="col" className="px-6 py-3 border-r">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Trade Amount
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Buy Price
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Sell Price
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Profit / Loss
                            </th>
                            <th scope="col" className="px-6 py-3 border-r">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            list.map(item => (

                                <TradeItem />
                            ))
                        } */}


                        <TradeItem />
                        <TradeItem />
                        <TradeItem />
                        <TradeItem />
                        <TradeItem />
                    </tbody>
                </table>
            </div>

            {addModal && <AddTradeModal setModalVis={setAddModal} />}
        </div>
    )
}

export default AddTrade