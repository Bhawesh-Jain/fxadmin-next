"use client"
import { useState } from "react";
import LoanItem from "../loanItem/loanItem";
import AddLoanModal from "../AddLoanModal/addLoanModal";

const LoanBody = ({ list, id }) => {
  const [addLoanModal, setAddLoanModal] = useState(false);

  const addLoan = () => {
    setAddLoanModal(true)
  }
  
  return (
    <>

      <button onClick={addLoan} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} bg-blue-500`}>
        Add Loan
      </button>

      <div className="grid items-center overflow-y-auto w-full mt-5">
        {
          list.map(item => (
            <LoanItem userId={id} key={item._id} item={item} />
          ))
        }
      </div>
      {addLoanModal && <AddLoanModal setModalVis={setAddLoanModal} userId={id} />}
    
    </>
  )
}

export default LoanBody