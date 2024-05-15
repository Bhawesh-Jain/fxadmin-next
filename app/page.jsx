import Transaction from "./ui/Transaction/transaction";
import User from "./ui/user/user";


export default function Home() {

  return (
    <div className="flex flex-col items-center px-2">
      <h2 className="text-2xl font-bold my-5">Dashboard</h2>

      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />

    </div>
  );
}
