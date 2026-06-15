import React, { useState } from 'react';

const App = () => {

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

    // Input + Select + Radio
    const getValue = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Checkbox
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
        <div>

            {/* Inputs */}
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={getValue}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={getValue}
            />

            <br /><br />

            <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={getValue}
            />

            <br /><br />

            <input
                type="text"
                name="fatherName"
                placeholder="Father Name"
                value={formData.fatherName}
                onChange={getValue}
            />

            <br /><br />

            <input
                type="text"
                name="motherName"
                placeholder="Mother Name"
                value={formData.motherName}
                onChange={getValue}
            />

            <br /><br />

            {/* Radio */}
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={getValue}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={getValue}
                />
                Female
            </label>

            <br /><br />

            {/* CheckBox */}
            <h3>Hobbies</h3>

            <label>
                <input
                    type="checkbox"
                    value="Cricket"
                    onChange={getCheckBox}
                />
                Cricket
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Football"
                    onChange={getCheckBox}
                />
                Football
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Music"
                    onChange={getCheckBox}
                />
                Music
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Coding"
                    onChange={getCheckBox}
                />
                Coding
            </label>

            <label>
                <input
                    type="checkbox"
                    value="Reading"
                    onChange={getCheckBox}
                />
                Reading
            </label>

            <br /><br />

            {/* Select Tags */}

            <select
                name="city"
                value={formData.city}
                onChange={getValue}
            >
                <option value="">Select City</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Delhi">Delhi</option>
            </select>

            <br /><br />

            <select
                name="state"
                value={formData.state}
                onChange={getValue}
            >
                <option value="">Select State</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Gujarat">Gujarat</option>
            </select>

            <br /><br />

            <select
                name="country"
                value={formData.country}
                onChange={getValue}
            >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
            </select>

            <br /><br />

            <select
                name="course"
                value={formData.course}
                onChange={getValue}
            >
                <option value="">Select Course</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
            </select>

            <br /><br />

            <select
                name="language"
                value={formData.language}
                onChange={getValue}
            >
                <option value="">Select Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
            </select>

        </div>
    );
};

export default App;