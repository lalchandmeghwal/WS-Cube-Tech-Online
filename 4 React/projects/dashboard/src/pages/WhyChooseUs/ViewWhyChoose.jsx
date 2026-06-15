import React, { useState } from "react";
import { FaFilter, FaPen } from "react-icons/fa";
import { MdFilterAltOff } from "react-icons/md";

const categories = [
    {
        id: 1,
        name: "Neil Sims",
        image: "https://packshifts.in/images/iso.png",
        description:" CEO Of SunPark",
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

const ViewWhyChoose = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className=" min-h-screen p-4">
            {showSearch &&
                <div className="w-full border border-[#ccc] rounded-lg p-4 ">

                    <div className="flex items-center gap-3">

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search Name"
                            className="w-105 h-14 px-4 rounded-xl bg-slate-700 text-white placeholder:text-gray-300 outline-none"
                        />

                        {/* Button */}
                        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center">

                            {/* Search Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                        </button>

                    </div>

                </div>
            }



            <div className="bg-white rounded-xl mt-4 overflow-hidden border border-gray-300">

                {/* Header */}
                <div className="flex items-center bg-[#f1f5f9] justify-between px-5 py-4 border-b border-gray-300">

                    <div className="flex items-center  w-full justify-between px-5 py-4 ">
                        <h1 className="text-2xl font-bold">View Testimonial</h1>

                        <div className="flex gap-3">


                            <button onClick={() => setShowSearch(!showSearch)} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-4 rounded-xl">
                                {showSearch ? <MdFilterAltOff /> : <FaFilter />}
                            </button>


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
                <div className="overflow-x-auto">

                    <table className="w-full">

                        {/* Table Head */}
                        <thead className="bg-slate-700 text-gray-300">
                            <tr>

                                <th className="p-5 text-left">
                                    <input type="checkbox" className="w-5 h-5" />
                                </th>

                                <th className="p-5 text-left text-lg">
                                    Title
                                </th>

                                <th className="p-5 text-left text-lg">
                                    IMAGE
                                </th>
                                <th className="p-5 text-left text-lg">
                                    Description
                                </th>

                                <th className="p-5 text-left text-lg">
                                    ORDER
                                </th>

                                <th className="p-5 text-left text-lg">
                                    STATUS
                                </th>

                                <th className="p-5 text-left text-lg">
                                    ACTION
                                </th>

                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="bg-slate-800 text-white">

                            {categories.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-slate-700 hover:bg-slate-700 duration-300"
                                >

                                    {/* Checkbox */}
                                    <td className="p-5">
                                        <input type="checkbox" className="w-5 h-5" />
                                    </td>

                                    {/* Name */}
                                    <td className="p-5 text-2xl font-semibold">
                                        {item.name}
                                    </td>

                                    {/* Image */}
                                    <td className="p-5">
                                        <img
                                            src={item.image}
                                            alt="category"
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                    </td>

                                    {/* Description*/}
                                    <td className="p-5 text-xl text-gray-300">
                                        {item.description}
                                    </td>

                                    {/* Order */}
                                    <td className="p-5 text-xl text-gray-300">
                                        {item.order}
                                    </td>

                                    {/* Status */}
                                    <td className="p-5">
                                        <button
                                            className={`px-6 py-2 rounded-xl font-bold text-lg ${item.status === "Active"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                                }`}
                                        >
                                            {item.status}
                                        </button>
                                    </td>

                                    {/* Action */}
                                    <td className="p-5">
                                        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center">
                                            <FaPen className="text-white text-lg" />
                                        </button>
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

export default ViewWhyChoose
