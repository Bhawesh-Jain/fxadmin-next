import UserItem from "../ui/user/userItem";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

export default async function Home() {

  const res = await fetch(`${baseUrl}/api/dashboard/user`, {
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
      <h2 className="text-2xl font-bold my-5">Dashboard</h2>
      {
        list.map(item => (
          <UserItem key={item._id} item={item} />
        ))
      }
    </div>
  );
}
