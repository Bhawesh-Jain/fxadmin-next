"use client"

import { useState } from "react";
import EditTradeModal from "./editTradeModal/editTradeModal";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const TradeItem = ({ item, setRefresh, setEditModal, setCurrentItem }) => {

    const openModal = () => {
        setCurrentItem(item)

        setEditModal(true)
    }

    const deleteItem = async () => {
        const confirmed = confirm("Are you sure?")

        if (confirmed) {
            const res = await fetch(`${baseUrl}/api/dashboard/user/trade?id=${item._id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                const body = await res.json();

                if (body.status) {
                    setRefresh(true)
                }
            }
        }
    }

    return (
        <>
            <tr className="border-b">
                <td className="px-6 py-3 border-r">
                    {item.date}
                </td>
                <td className="px-6 py-3 border-r">
                    {item.amount}
                </td>
                <td className="px-6 py-3 border-r">
                    {item.quantity}
                </td>
                <td className="px-6 py-3 border-r">
                    {item.buy}
                </td>
                <td className="px-6 py-3 border-r">
                    {item.sell}
                </td>
                <td className="px-6 py-3 border-r">
                    {item.profit}
                </td>
                <td className="px-6 py-3 border-r grid xl:grid-cols-2 gap-2">
                    <button onClick={openModal} className="py-2 px-4 bg-green-500 text-white rounded">Edit</button>
                    <button onClick={deleteItem} className="py-2 px-4 bg-red-500 text-white rounded">Delete</button>
                </td>
            </tr>


        </>
    )
}

export default TradeItem