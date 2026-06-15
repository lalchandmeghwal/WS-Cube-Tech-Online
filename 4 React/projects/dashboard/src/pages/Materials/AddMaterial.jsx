import React from "react";

const AddMaterial = () => {
    return (
        <div className="w-full min-h-screen  p-4">

            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">

                {/* Header */}
                <div className="border-b border-gray-300 bg-[#f1f5f9]  px-5 py-4">
                    <h1 className="text-4xl font-semibold">Add Material</h1>
                </div>

                {/* Form */}
                <div className="p-4">

                    {/* Material Name */}
                    <div className="mb-8">
                        <label className="block text-2xl font-medium mb-2">
                            Category Name
                        </label>

                        <input
                            type="text"
                            placeholder="Material Name"
                            className="w-full h-14 border border-gray-300 rounded-xl px-4 text-lg outline-none focus:border-purple-500"
                        />
                    </div>

                    {/* Order */}
                    <div className="mb-12">
                        <label className="block text-2xl font-medium mb-2">
                            Order
                        </label>

                        <input
                            type="number"
                            placeholder="Order"
                            className="w-full h-14 border border-gray-300 rounded-xl px-4 text-lg outline-none focus:border-purple-500"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl text-xl font-semibold">
                        Add Material
                    </button>

                </div>
            </div>
        </div>
    );
};



export default AddMaterial
