"use client"

import AddSliderModal from "@/app/ui/slider/addSliderModal";
import SliderItem from "@/app/ui/slider/sliderItem";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"



const Body = ({ list }) => {

    const router = useRouter()
    const [addModal, setAddModal] = useState(false);

    useEffect(() => {
        if(!addModal) {
            router.refresh()
        }
    }, [addModal]);

    const handleAdd = () => {
        setAddModal(true)
    }

    return (
        <div className="w-full">

            <button onClick={handleAdd} className={`${"p-3 select-none rounded text-white text-center hover:cursor-pointer"} w-auto bg-blue-500`}>
                Add New
            </button>

            <div className="grid md:grid-cols-2 items-center overflow-y-auto w-full mt-5">
                {
                    list.map(item => (
                        <SliderItem key={item._id} item={item} />
                    ))
                }
            </div>

            {addModal && <AddSliderModal setModalVis={setAddModal}/>}

        </div>
    )
}

export default Body