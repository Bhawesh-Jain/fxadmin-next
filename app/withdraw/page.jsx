import Transaction from "../ui/Transaction/transaction"

const Withdraw = () => {
    return (
        <div className="flex flex-col items-center px-2">
            <h2 className="text-2xl font-bold my-5">Withdraws</h2>

            <div className="flex flex-col items-center overflow-y-auto w-full">
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
        </div>
    )
}

export default Withdraw