import LoanBody from "./loanBody/loanBody";

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
          <LoanBody list={list} id={id} />
        </div>
      </>
    )
  }

  return (
    <div>No Loans Yet!</div>
  )
}

export default LoanList