import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const products = [
    {
        id: 1,
        orderId: "Frank01",
        name: "Roshan Chaurasia",
        quantity: 3,
        price: 3500,
        date: "10/06/2024",
        status: "Processing...",

    },
];

const Orders = () => {
    return (
        <div className="w-full min-h-screen  p-4">

            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">

                {/* Header */}
                <div className="border-b bg-[#f1f5f9] border-gray-300 px-5 py-5">
                    <h1 className="text-2xl font-semibold">
                        Order's List
                    </h1>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">

                    <table className="w-full">

                        {/* Table Head */}
                        <thead className="bg-[#f9fafb] text-gray-700">
                            <tr>

                                <th className="p-5  text-left font-bold text-sm ">
                                    <button className=" bg-[#645df0]  text-white py-1 px-2 rounded cursor-pointer " > DELETE</button>
                                </th>

                                <th className="p-5 text-left  uppercase font-bold   text-sm ">
                                    S. NO.
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm ">
                                    Order ID
                                </th>
                                <th className="p-5 text-left uppercase  font-bold  text-sm ">
                                    NAME
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm ">
                                    Quantity
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm">
                                    Price
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm">
                                    Date
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm">
                                    STATUS
                                </th>

                                <th className="p-5 text-left uppercase  font-bold  text-sm">
                                    View
                                </th>

                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>

                            {products.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-300 "
                                >

                                    {/* Checkbox */}
                                    <td className="p-5">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5"
                                        />
                                    </td>

                                    {/* Serial Number */}
                                    <td className="p-5 text-[16px] text-gray-600">
                                        {index + 1}
                                    </td>


                                    <td className="p-5 text-[16px] text-gray-700">
                                        {item.orderId}
                                    </td>

                                    <td className="p-5 text-[16px] text-gray-700">
                                        {item.name}
                                    </td>

                                    {/* Description */}
                                    <td className="p-5">
                                        <p className="text-[16px] text-gray-600">
                                            {item.quantity}
                                        </p>


                                    </td>

                                    {/* Short Description */}
                                    <td className="p-5">
                                        <p className="text-[16px] text-gray-600">
                                            ₹{item.price}
                                        </p>

                                    </td>

                                    <td className="p-5">
                                        <p className="text-[16px] text-gray-600">
                                            ₹{item.date}
                                        </p>

                                    </td>

                                    {/* Status */}
                                    <td className="p-5  text-gray-600">
                                        {item.status}
                                    </td>

                                    {/* Action */}
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">

                                            <button className=" cursor-pointer text-lg border border-[#ccc] hover:text-[#5683e9] hover:bg-[#f1f5f9] py-1 px-3 rounded-full " >
                                                View
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

export default Orders
