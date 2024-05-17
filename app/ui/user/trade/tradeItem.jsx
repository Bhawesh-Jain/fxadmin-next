import EditTradeModal from "./editTradeModal/editTradeModal";

const TradeItem = () => {
    const [editModal, setEditModal] = useState(false);

    const openModal = () => {
        setEditModal(true)
    }

    return (
        <>
            <tr className="border-b">
                <td className="px-6 py-3 border-r">
                    24-02-2024
                </td>
                <td className="px-6 py-3 border-r">
                    5000
                </td>
                <td className="px-6 py-3 border-r">
                    20
                </td>
                <td className="px-6 py-3 border-r">
                    3000
                </td>
                <td className="px-6 py-3 border-r">
                    5000
                </td>
                <td className="px-6 py-3 border-r">
                    2000
                </td>
                <td className="px-6 py-3 border-r">
                    <button onClick={openModal} className="py-2 px-4 bg-green-500 text-white rounded">Edit</button>
                </td>
            </tr>
            {editModal && <EditTradeModal setModalVis={setEditModal} />}

        </>
        )
}

export default TradeItem