import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // localStorage se token remove karo
        localStorage.removeItem("token");

        // cookie use kar rahe ho to API call yaha karo

        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 text-center">

                <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-full  bg-red-100 flex  items-center justify-center">
                        <FaSignOutAlt className="text-red-600 text-4xl" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-3">
                    Logout
                </h2>

                <p className="text-gray-600 mb-8">
                    Are you sure you want to logout?
                </p>

                <div className="flex justify-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="px-6  cursor-pointer  py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleLogout}
                        className="px-6 py-3  cursor-pointer  bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Logout;

