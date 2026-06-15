import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

const AddFaqs = () => {
    return (
        <div className=" min-h-screen p-4">
            <div className="w-full border border-[#ccc]  overflow-hidden  rounded-md  ">
                {/* Heading */}

                <h1 className="text-3xl bg-[#f1f5f9] border-b border-[#ccc] p-3 font-semibold mb-6">Add Faq</h1>

                <div className="grid grid-cols-1 p-4 gap-6">


                    {/* Right Side */}
                    <div className="md:col-span-2 space-y-4">




                        <div>
                            <label className="block  font-semibold mb-2">
                                Question
                            </label>

                            <input
                                type="text"
                                placeholder="Question"
                                className="w-full p-2  border border-gray-300 rounded-lg px-5 text-lg outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">
                                Answer
                            </label>

                            <textarea
                                rows={5}

                                placeholder="Answer"
                                className="w-full p-2 border border-gray-300 rounded-lg px-5 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <div>
                            <label className="block  font-semibold mb-2">
                                Order <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="number"
                                placeholder="Order"
                                className="w-full p-2 border border-gray-300 rounded-lg px-5 text-lg outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button className="mt-6 bg-purple-700 cursor-pointer hover:bg-purple-800 text-white  font-semibold px-4 py-2 rounded-xl">
                            Add Faq
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFaqs
