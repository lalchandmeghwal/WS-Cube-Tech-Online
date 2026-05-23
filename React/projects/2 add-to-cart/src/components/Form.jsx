import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        fatherName: '',
        motherName: '',
        gender: '',
        hobbies: [],
        city: '',
        state: '',
        country: '',
        course: '',
        language: ''
    });

    const getValue = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const getCheckBox = (e) => {

        const { value, checked } = e.target;

        if (checked) {
            setFormData({
                ...formData,
                hobbies: [...formData.hobbies, value]
            });
        } else {
            setFormData({
                ...formData,
                hobbies: formData.hobbies.filter(
                    (item) => item !== value
                )
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Student Registration Form
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    />

                    {/* Phone */}
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    />

                    {/* Father Name */}
                    <input
                        type="text"
                        name="fatherName"
                        placeholder="Father Name"
                        value={formData.fatherName}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    />

                    {/* Mother Name */}
                    <input
                        type="text"
                        name="motherName"
                        placeholder="Mother Name"
                        value={formData.motherName}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    />

                    {/* Gender */}
                    <div className="flex items-center gap-5 border border-gray-300 p-3 rounded-lg">

                        <h2 className="font-semibold">Gender :</h2>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={getValue}
                            />
                            Male
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={getValue}
                            />
                            Female
                        </label>

                    </div>

                </div>

                {/* Hobbies */}
                <div className="mt-8">

                    <h2 className="text-2xl font-semibold mb-4">
                        Hobbies
                    </h2>

                    <div className="flex flex-wrap gap-5">

                        {
                            ['Cricket', 'Football', 'Music', 'Coding', 'Reading']
                                .map((item, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
                                    >
                                        <input
                                            type="checkbox"
                                            value={item}
                                            onChange={getCheckBox}
                                        />
                                        {item}
                                    </label>
                                ))
                        }

                    </div>

                </div>

                {/* Select Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                    <select
                        name="city"
                        value={formData.city}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    >
                        <option value="">Select City</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Delhi">Delhi</option>
                    </select>

                    <select
                        name="state"
                        value={formData.state}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    >
                        <option value="">Select State</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Gujarat">Gujarat</option>
                    </select>

                    <select
                        name="country"
                        value={formData.country}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>

                    <select
                        name="course"
                        value={formData.course}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                    >
                        <option value="">Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                    </select>

                    <select
                        name="language"
                        value={formData.language}
                        onChange={getValue}
                        className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 md:col-span-2"
                    >
                        <option value="">Select Language</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                    </select>

                </div>

                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl mt-8 transition duration-300">
                    Submit Form
                </button>

            </div>

        </div>
    );
};

export default Form;