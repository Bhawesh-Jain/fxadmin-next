import LoanItem from "./loanItem/loanItem";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const getLoan = async (id) => {
  const res = await fetch(`${baseUrl}/api/dashboard/user/loan?id=${id}`, {
    method: "GET",
    cache: "no-cache"
  });

  if (res.ok) {
    var body = await res.json()

    if (body.status) {
      return body.data
    }
  }
}


const LoanList = async ({ id }) => {

  const list = await getLoan(id)

  if (list.length > 0) {
    return (
      <>
        <div className="flex flex-col items-center px-2">
          <h2 className="text-2xl font-bold my-5">Loans</h2>

          <button className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} bg-blue-500`}>
            Add Loan
        </button>

          <div className="grid items-center overflow-y-auto w-full mt-5">
            {
              list.map(item => (
                <LoanItem userId={id} key={item._id} item={item} />
              ))
            }
          </div>
        </div>
      </>
    )
  }

  return (
    <div>No Loans Yet!</div>
  )
}

export default LoanList