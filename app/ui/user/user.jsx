import PrimaryBtn from "../Skeleton/PrimaryBtn/PrimaryBtn"

const User = ({item}) => {
    return (
        <div className="flex flex-col w-full gap-1 mb-3 p-3 border-b border-gray-200">
            <h2 className="font-medium text-base">Name of the User</h2>
            <p>9876543210</p>
            <p>test@gmail.com</p>

            <div className="grid grid-cols-2 lg:grid-cols-3 text-sm items-center justify-around gap-5 mt-4">
                <PrimaryBtn color="green" text="View" width="" />
                <PrimaryBtn color="blue" text="Add loan" width="" />
                <PrimaryBtn color="red" text="Delete" width="" />
                <PrimaryBtn color="blue" text="Transactions" width="" />
                <PrimaryBtn color="red" text="Trades" width="" />
                <PrimaryBtn color="green" text="Investement" width="" />
            </div>
        </div>
    )
}

export default User