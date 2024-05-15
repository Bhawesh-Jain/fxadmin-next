import ContactUsItem from "@/app/ui/contact/contactUsItem"

const Contact = () => {
    return (
        <div className="flex flex-col items-center px-2">
            <h2 className="text-2xl font-bold my-5">Contact Us</h2>

            <div className="flex flex-col items-center overflow-y-auto w-full text-sm">

                <ContactUsItem  />
                <ContactUsItem  />
                <ContactUsItem  />
                <ContactUsItem  />

            </div>
        </div>
    )
}

export default Contact