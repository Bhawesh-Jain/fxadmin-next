import Transaction from "@/app/ui/Transaction/transaction"


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const UserTransactions = async ({ params }) => {

    const { id } = params

    const res = await fetch(`${baseUrl}/api/dashboard/user/transactions/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-type": "application/json"
        }
    });

    let list = []

    if (res.ok) {
        var body = await res.json()


        list = body.data
    }

    if (list.length > 0) {
        return (
            <div className="flex flex-col items-center px-2 pt-5">
                <h2 className="text-2xl font-bold mt-16 md:mt-4 ">User Transactions</h2>

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
    else return (
        <div className="flex flex-col items-center px-2 pt-5">
            <h2 className="text-xl font-medium mt-16 md:mt-4 ">No Transactions for this User</h2>

        </div>
    )
}

export default UserTransactions