import EditForm from "@/app/ui/Service/edit/EditForm"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getServiceById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/api/dashboard/service/${id}`, {
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

const EditService = async ({ params }) => {

    const { id } = params;

    var body = await getServiceById(id)

    return (
       <EditForm description={body.data.description} icon={body.data.icon} name={body.data.name} id={id}/>
    )
}

export default EditService