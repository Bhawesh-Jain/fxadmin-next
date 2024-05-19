import WithdrawItem from "@/app/ui/Withdraw/withdrawItem";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const WithdrawBody = async () => {

  const res = await fetch(`${baseUrl}/api/dashboard/withdraw`, {
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
    <>
      {
        list.map(item => (
          <WithdrawItem key={item._id} item={item} />
        ))
      }
    </>
  )
}

export default WithdrawBody