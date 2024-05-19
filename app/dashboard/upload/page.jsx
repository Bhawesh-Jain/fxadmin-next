
import UploadQrForm from "@/app/ui/upload/uploadQrForm";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getPaymentItems = async () => {
  const res = await fetch(`${baseUrl}/api/dashboard/upload`, {
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

const UploadQr = async () => {

  const paymentItem = await getPaymentItems()

  return(
    <UploadQrForm paymentItem={paymentItem} />
  )
}

export default UploadQr