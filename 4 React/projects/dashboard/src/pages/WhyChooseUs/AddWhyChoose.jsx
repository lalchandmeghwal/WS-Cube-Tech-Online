import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

const AddWhyChoose = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    // Image Select Handler
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    // Drag & Drop Handler
    const handleDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    return (
        <div className=" min-h-screen p-4">
            <div className="w-full border border-[#ccc]  overflow-hidden  rounded-md  ">
                {/* Heading */}

                <h1 className="text-3xl bg-[#f1f5f9] p-3 font-semibold mb-6">Add Sub Category</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-6">
                    {/* Left Side */}
                    <div>
                        <label className="block text-xl font-semibold mb-2">
                            Choose Image
                        </label>

                        {/* Upload Box */}
                        <div
                            onClick={() => fileInputRef.current.click()}
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            className="w-full h-82.5 border-2 border-gray-300 bg-white flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                        >
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    <UploadCloud size={55} className="text-gray-400 mb-3" />
                                    <p className="text-gray-400 text-3xl font-medium">
                                        Drag and drop
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Hidden Input */}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        {/* Button */}
                        <button className="mt-6 bg-purple-700 cursor-pointer hover:bg-purple-800 text-white  font-semibold px-4 py-2 rounded-xl">
                            Add Category
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="md:col-span-2 space-y-8">
                      
                       

                    
                        <div>
                            <label className="block  font-semibold mb-2">
                                Title
                            </label>

                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full p-2  border border-gray-300 rounded-lg px-5 text-lg outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Order */}
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
                        {/* Order */}
                        <div>
                            <label className="block font-semibold mb-2">
                                Description<span className="text-red-500">*</span>
                            </label>

                            <textarea
                               rows={5}
                               
                                placeholder="Description"
                                className="w-full p-2 border border-gray-300 rounded-lg px-5 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddWhyChoose
