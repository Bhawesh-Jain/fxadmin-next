import LoanList from "@/app/ui/user/loan/loanList"



const Page = ({params}) => {
  const { id } = params

   return (
      <LoanList  id={id}/>
   )
}

export default Page