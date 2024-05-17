const { default: UserEditForm } = require("@/app/ui/user/edit/EditForm")

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getUserById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/api/dashboard/user/${id}`, {
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

const EditUser = async ({params}) => {

    const { id } = params;

    const body = await getUserById(id)

    const item = body.data

    return (
        <UserEditForm item={item}/>
    )
}

export default EditUser