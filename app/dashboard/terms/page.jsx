"use client"

import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Terms = () => {

   const [terms, setAbout] = useState("");
   const [errorMsg, setErrorMsg] = useState("");

   useEffect(() => {
      fetchList()
   }, []);

   const fetchList = async () => {
      const res = await fetch(`${baseUrl}/api/dashboard/terms`, {
         method: "GET",
         cache: "no-cache"
      });

      if (res.ok) {
         const body = await res.json();

         setAbout(body.data.description)
      }
   }

   const handleChange = (e) => {
      setAbout(e.target.value)
   }

   const updateAbout = async () => {
      
      const rawFormData = {
         description: terms
     }
     try {
         const res = await fetch(`${baseUrl}/api/dashboard/terms`, {
             method: "PUT",
             headers: {
                 "Content-type": "application/json"
             },
             body: JSON.stringify(rawFormData),
         });

         if (res.ok) {
             const body = await res.json();

             setErrorMsg(body.message)
             
         }
     } catch (error) {
         console.log(error);
         setErrorMsg(error)
     }
   }

   return (
      <div className="px-3 py-16 md:p-8 flex-col flex gap-4 items-center">
         <label htmlFor="terms" className="block mb-2 text-sm font-medium text-gray-900">
            <h1 className="text-xl font-bold text-center my-5">
               Terms & Conditions
            </h1>
         </label>
         {errorMsg && errorMsg.length > 0 && <p className="text-base font-medium ">{errorMsg}</p> }
         <textarea
            defaultValue={terms}
            type="text"
            name="terms"
            rows="20"
            id="subject"
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            required />

         <button
            onClick={updateAbout}
            className="w-2/3 md:w-1/3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
      </div>
   )
}

export default Terms