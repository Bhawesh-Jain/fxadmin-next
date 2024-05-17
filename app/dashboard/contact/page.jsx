"use client"


import ContactUsItem from "@/app/ui/contact/contactUsItem"
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Contact = () => {
    const [List, setList] = useState([]);

    useEffect(() => {
        fetchList()
    }, []);

    const fetchList = async () => {
        const res = await fetch(`${baseUrl}/api/dashboard/contact`, {
            method: "GET",
            cache: "no-cache"
        });

        if (res.ok) {
            const body = await res.json();

            setList(body.data)
        }
    }

    return (
        <div className="flex flex-col items-center px-2">
            <h2 className="text-2xl font-bold my-5">Contact Us</h2>

            <div className="flex flex-col items-center overflow-y-auto w-full text-sm">

                {List.length > 0 &&
                    List.map(item => (
                        <ContactUsItem key={item._id} item={item} />
                    ))
                }
                {List.length == 0 &&
                    <p className="text-base font-medium my-5">No Items Found</p>
                }


            </div>
        </div>
    )
}

export default Contact