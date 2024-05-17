import EditTransactionForm from "@/app/ui/Transaction/editTransaction/editTransaction"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getTransactionById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/api/dashboard/transaction/${id}`, {
            method: "GET",
            cache: "no-store"
        });

        if (res.ok) {
            var body = await res.json()

            if (body.status) {
                return body;
            } else {
                console.log(body);
            }
        } else {
        }
    } catch (error) {
        console.log(error);
    }
}

const Test = async ({ params }) => {

    const { id } = params;

    var body = await getTransactionById(id)

    return (
        <div className="w-1/2 h-1/2">
            <EditTransactionForm item={body.data} />
        </div>
    )
}

export default Test