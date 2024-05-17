import Transaction from "@/app/ui/Transaction/transaction"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const Transactions = async () => {

    const res = await fetch(`${baseUrl}/api/dashboard/transaction`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-type": "application/json"
        }
    });

    let list = []

    if (res.ok) {
        let body = await res.json()

        list = body.data
    }

    return (
        <div className="flex flex-col items-center px-2">
            <h2 className="text-2xl font-bold my-5">Transactions</h2>

            <div className="flex flex-col items-center overflow-y-auto w-full">
                {
                    list.map(item => (
                        <Transaction key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Transactions