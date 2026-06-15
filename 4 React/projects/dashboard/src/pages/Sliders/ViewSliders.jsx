import React, { useState } from "react";
import { FaFilter, FaPen } from "react-icons/fa";
import { MdFilterAltOff } from "react-icons/md";

const categories = [
    {
        id: 1,
        name: "Neil Sims",
        image: "https://packshifts.in/images/iso.png",
        description: " CEO Of SunPark",
        order: 1,
        status: "Active",
    },
    {
        id: 2,
        name: "Neil Sims",
        image: "https://packshifts.in/images/iso.png",
        description: " CEO Of SunPark",
        order: 1,
        status: "Deactive",
    },
];

const ViewSliders = () => {


    return (
        <div className=" min-h-screen p-4">



            <div className="bg-white rounded-xl mt-4 overflow-hidden border border-gray-300">

                {/* Header */}
                <div className="flex items-center bg-[#f1f5f9] justify-between px-5 py-4 border-b border-gray-300">

                    <div className="flex items-center  w-full justify-between px-5 py-4 ">
                        <h1 className="text-2xl font-bold">View Slider</h1>

                        <div className="flex gap-3">





                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold">
                                Change Status
                            </button>

                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold">
                                Delete
                            </button>
                        </div>
                    </div>


                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-md">
                    <table className="w-full">

                        {/* TABLE HEAD */}
                        <thead className="bg-[#37445c] text-gray-300 uppercase">
                            <tr>

                                <th className="p-5 text-left">
                                    <input type="checkbox" className="w-5 h-5" />
                                </th>

                                <th  className="p-5  text-left">
                                    Name
                                </th>

                                <th className="p-5 text-center">
                                    Image
                                </th>

                                <th className="p-5 text-center">
                                    Order
                                </th>

                                <th className="p-5 text-center">
                                    Status
                                </th>

                                <th className="p-5 text-center">
                                    Action
                                </th>

                            </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody className="bg-[#1f2a44] text-white">

                            {categories.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t border-slate-700"
                                >

                                    {/* CHECKBOX */}
                                    <td className="p-5">
                                        <input type="checkbox" className="w-5 h-5" />
                                    </td>

                                    {/* NAME */}
                                    <td   className="p-5 font-semibold text-[18px]">
                                        {item.name}
                                    </td>

                                    {/* IMAGE */}
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            <img
                                                src={item.image}
                                                alt="category"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        </div>
                                    </td>

                                    {/* ORDER */}
                                    <td className="p-5 text-center text-gray-300 text-lg">
                                        {item.order}
                                    </td>

                                    {/* STATUS */}
                                    <td className="p-5 text-center">
                                        <button
                                            className={`px-6 py-2 rounded-xl font-bold text-white ${item.status === "Active"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                                }`}
                                        >
                                            {item.status}
                                        </button>
                                    </td>

                                    {/* ACTION */}
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                                                <FaPen className="text-white text-sm" />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ViewSliders

