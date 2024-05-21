import FooterForm from "@/app/ui/footer/FooterForm";


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getPaymentItems = async () => {
  const res = await fetch(`${baseUrl}/api/dashboard/footer/all`, {
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
const Footer = async () => {
  var paymentItem = await getPaymentItems()

  if (!paymentItem) {
    paymentItem = {
        email: "",
        address: "",
        contact: ""
    }
  }

    return (
        <FooterForm paymentItem={paymentItem} />
    )
}

export default Footer