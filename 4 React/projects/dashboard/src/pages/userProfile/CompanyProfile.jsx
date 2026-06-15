import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const CompanyProfile = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-5">

            <div className="bg-white p-6 rounded-lg shadow">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[33%_auto] gap-6">

                    {/* Image Upload */}
                    <div>
                        <label className="block font-semibold mb-2">
                            Category Image
                        </label>

                        <div className="h-48 border border-gray-300 flex flex-col items-center justify-center cursor-pointer">
                            <FaCloudUploadAlt className="text-5xl text-gray-300" />
                            <p className="text-2xl text-gray-300 mt-3">
                                Drag and drop
                            </p>

                            <input type="file" className="hidden" />
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-3">

                        <div>
                            <label className="block font-semibold mb-1">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">
                                Mobile Number
                            </label>

                            <input
                                type="number"
                                placeholder="Mobile Number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                    </div>
                </div>

                {/* Address */}
                <div className="mt-6">
                    <textarea
                        rows="4"
                        placeholder="Address"
                        className="w-full border-2 border-gray-500 rounded-lg p-3 outline-none"
                    ></textarea>
                </div>

                {/* Google Map URL */}
                <div className="mt-6">
                    <textarea
                        rows="4"
                        placeholder="Google Map URL"
                        className="w-full border-2 border-gray-500 rounded-lg p-3 outline-none"
                    ></textarea>
                </div>

                {/* Map */}
                <div className="mt-6 border rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57242.0081345318!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1780164854477!5m2!1sen!2sin" className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                {/* Button */}
                <button className="mt-8 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg">
                    Update Company Profile
                </button>

            </div>

        </div>

    );
};

export default CompanyProfile;
