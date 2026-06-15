import React, { useState } from "react";
import { ChromePicker } from "react-color";

const AddColor = () => {
    const [color, setColor] = useState("#000000");

    return (
        <div className="w-full p-6   min-h-screen">

            <div className="border border-gray-400 rounded-lg bg-white">

                {/* Heading */}
                <div className="border-b border-gray-300 px-4 py-3">
                    <h2 className="text-3xl font-semibold">Add Colors</h2>
                </div>

                <div className="p-4">

                    {/* Color Name */}
                    <div className="mb-6">
                        <label className="block text-xl font-medium mb-2">
                            Color Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Color Name"
                            className="w-full h-14 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Color Picker */}
                    <div className="mb-8">
                        <label className="block text-xl font-medium mb-2">
                            Color Picker
                        </label>

                        <div className="flex items-center gap-4">

                            <ChromePicker
                                color={color}
                                onChange={(updatedColor) => setColor(updatedColor.hex)}
                            />

                            {/* Preview Box */}
                            <div
                                className="w-14 h-14 rounded-md border-2 border-gray-300"
                                style={{ backgroundColor: color }}
                            ></div>

                        </div>
                    </div>

                    {/* Order */}
                    <div className="mb-10">
                        <label className="block text-xl font-medium mb-2">
                            Order
                        </label>

                        <input
                            type="number"
                            placeholder="Enter Order"
                            className="w-full h-14 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
                        Add Color
                    </button>

                </div>
            </div>
        </div>
    );
};


export default AddColor
