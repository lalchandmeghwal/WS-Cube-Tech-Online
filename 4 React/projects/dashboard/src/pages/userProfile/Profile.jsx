import React, { useState } from "react";
import {
    FaUserCircle,
    FaPhoneAlt,
    FaEnvelope,
    FaCloudUploadAlt,
} from "react-icons/fa";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="grid grid-cols-1  items-start lg:grid-cols-3 gap-5">

                {/* Left Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    <div className="flex flex-col items-center py-12">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="profile"
                            className="w-28 h-28 rounded-full object-cover"
                        />

                        <h2 className=" mt-4 font-medium">
                            Admin
                        </h2>
                    </div>

                    <div className="bg-[#f6f9fd] p-7">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-5">

                            <div className="flex  items-center gap-4">
                                <FaPhoneAlt />
                                <span >1234567890</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope />
                                <span >
                                    xyz@gmail.com
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Right Section */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">

                    {/* Tabs */}
                    <div className="flex border-b mb-8">

                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`pb-4 cursor-pointer px-8 text-xl ${activeTab === "profile"
                                    ? "text-purple-700 border-b-4 border-purple-700"
                                    : "text-gray-700"
                                }`}
                        >
                            Edit Profile
                        </button>

                        <button
                            onClick={() => setActiveTab("password")}
                            className={`pb-4 cursor-pointer px-8 text-xl ${activeTab === "password"
                                    ? "text-purple-700 border-b-4 border-purple-700"
                                    : "text-gray-700"
                                }`}
                        >
                            Change Password
                        </button>

                    </div>

                    {/* Edit Profile */}
                    {activeTab === "profile" && (
                        <div className="grid grid-cols-1 lg:grid-cols-[35%_auto] gap-8">

                            {/* Upload */}
                            <div>
                                <label className="block text-lg font-semibold mb-2">
                                    Choose Image
                                </label>

                                <div className="border-2 border-gray-300 h-60 flex flex-col items-center justify-center cursor-pointer">
                                    <FaCloudUploadAlt className="text-7xl text-gray-300" />
                                    <p className="text-4xl  text-gray-300 mt-3">
                                        Profile
                                    </p>

                                    <input
                                        type="file"
                                        className="hidden"
                                    />
                                </div>

                                <button className="mt-6 bg-purple-700 hover:bg-purple-800 cursor-pointer text-white px-8 py-3 rounded-lg  font-semibold">
                                    Update Profile
                                </button>
                            </div>

                            {/* Form */}
                            <div className="space-y-6">

                                <div>
                                    <label className="block  font-semibold mb-1">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block  font-semibold mb-1">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block  font-semibold mb-1">
                                        Mobile Number
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Number"
                                        className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                    />
                                </div>

                            </div>

                        </div>
                    )}

                    {/* Change Password */}
                    {activeTab === "password" && (
                        <div className="  space-y-5">

                            <div className="  " >
                                <label className="block  font-semibold mb-2">
                                    Current Password
                                </label>

                                <input
                                    type="password"
                                    className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                />
                            </div>

                            <div>
                                <label className="block  font-semibold mb-2">
                                    New Password
                                </label>

                                <input
                                    type="password"
                                    className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                />
                            </div>

                            <div>
                                <label className="block  font-semibold mb-2">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    className="w-full border-2 border-[#ccc] rounded-lg px-4 py-2 text-xl outline-none"
                                />
                            </div>

                            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg cursor-pointer  font-semibold">
                                Change Password
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};


export default Profile
