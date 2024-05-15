"use client"
import Image from "next/image";
import { MdDashboardCustomize } from "react-icons/md";
import PrimaryBtn from "../Skeleton/PrimaryBtn/PrimaryBtn";

const ServiceItem = ({ item }) => {
    return (
        <div className="text-black m-3 p-3 border border-solid border-gray-300 rounded-lg bg-white flex flex-col items-center">
            <div className="mt-5">
                <MdDashboardCustomize size={40}/>
            </div>

            <h1 className="text-center font-bold mt-8 mb-4 text-lg">Service Name</h1>

            <p className="text-center text-sm mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quisquam, error voluptatum quas voluptate mollitia modi impedit pariatur, quidem vitae, dicta ab architecto quasi iste!</p>

            <div className="flex flex-row gap-3 my-3 w-full items-center justify-around">
                <div className="hidden w-1/3"></div>
                <PrimaryBtn color="green" text="Edit" width="1/3" />
                <PrimaryBtn color="red" text="Delete" width="1/3" />
            </div>
        </div>
    );
};

export default ServiceItem;
