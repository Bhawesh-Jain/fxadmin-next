import EditForm from "@/app/ui/Service/edit/EditForm"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getServiceById = async (id) => {
    console.log(id);

    try {
        const res = await fetch(`${baseUrl}/api/dashboard/service/${id}`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(rawFormData),
        });

        if (res.ok) {
            var body = await res.json()

            console.log(body);
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
        <></>
        // <EditForm description={body.description} icon={body.icon} name={body.name} />
    )
}

export default EditService