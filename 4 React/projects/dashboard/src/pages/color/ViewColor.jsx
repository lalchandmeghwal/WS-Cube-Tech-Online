import React, { useState } from 'react'
import { FaFilter, FaPen } from 'react-icons/fa';
import { MdFilterAltOff, } from "react-icons/md";


const ViewColor = () => {

    const [showSearch, setShowSearch] = useState(false);

    const users = [
        {
            id: 1,
            name: "Red",
            code: '	#er33rv',
            order: 1,
            status: "Active"
        },

    ];


    return (

        <>


            <div className=" min-h-screen p-4">
                {showSearch &&
                    <div className="w-full bg-[#f9fafb]   rounded-lg p-4 ">

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

                <div className="bg-[#f1f5f9] border border-[#ccc] rounded-lg  mt-4 overflow-hidden shadow-md">

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b">
                        <h1 className="text-2xl font-bold">View Color</h1>

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

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-700 text-gray-300">
                                <tr>
                                    <th className="p-5 text-left">
                                        <input type="checkbox" className="w-5 h-5" />
                                    </th>

                                    <th className="p-5 text-left">Color Name</th>
                                    <th className="p-5 text-left">Code</th>
                                    <th className="p-5 text-left">Order</th>
                                    <th className="p-5 text-left">STATUS</th>
                                    <th className="p-5 text-left">ACTION</th>
                                </tr>
                            </thead>

                            <tbody className="bg-slate-800 text-white">
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="border-b border-slate-700 hover:bg-slate-700 duration-300"
                                    >
                                        <td className="p-5">
                                            <input type="checkbox" className="w-5 h-5" />
                                        </td>

                                        <td className="p-5 text-2xl font-semibold">
                                            {user.name}
                                        </td>

                                        <td className="p-5 text-lg text-gray-300">
                                            {user.code}
                                        </td>

                                        <td className="p-5 text-lg text-gray-300">
                                            {user.order}
                                        </td>

                                        <td className="p-5">
                                            <button
                                                className={`px-6 py-2 rounded-xl font-bold ${user.status === "Active"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                                    }`}
                                            >
                                                {user.status}
                                            </button>
                                        </td>

                                        <td className="p-5">
                                            <button className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center">
                                                <FaPen className="text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};


export default ViewColor
