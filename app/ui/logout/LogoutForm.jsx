import { logout } from "@/libs/actions"
import { MdLogout } from "react-icons/md"

const LogoutForm = () => {
   return (
      <form action={logout} className="">
        <button className={`${"flex flex-row items-center gap-4 rounded-md px-2 py-4 m-2"}`}>
                <MdLogout size={20} /> Logout
            </button>
      </form>
   )
}

export default LogoutForm