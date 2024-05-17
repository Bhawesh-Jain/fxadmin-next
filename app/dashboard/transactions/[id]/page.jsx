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

const EditTransactions = async ({params}) => {

    const { id } = params;

    var body = await getTransactionById(id)

    return (
        <EditTransactionForm item={body.data} />
    )
}

export default EditTransactions