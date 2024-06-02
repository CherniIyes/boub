import React, { useState } from 'react';
import './EventSignUp.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function EventSignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        birthday: {
            month: 'June',
            day: 28,
            year: 2024,
        },
        gender: 'Male',
        agreeToTerms: false,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleGenderChange = (gender) => {
        setFormData({ ...formData, gender });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="event-sign-up">
            <div className="event-header">
                <div className="image-containerss"> {/* Container for the image */}
                    <img src="https://s3-alpha-sig.figma.com/img/e33d/4479/727493041d9f6aaa3e51440c550f622b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKUeQyWeoTNDqyOskQ5skwbRHJYdoYH67dAUCDeFjZZtd3Lc0au1Lmoia2nCfK9~jYJzwGJZHNYDTLXua9i9ODrtzIN2YwVbn5LuCjPGNV11VVqJjEcoED8xVttHszCbDFV2mBO~r5bO0-V~nJTDWdwyluipV9ylDtbqD6Bsbb8HEamdVzVQdSIwxvsc26kpajj6pnRsZ-KMr77KIeNGN2fWnyUX2Sg30ILMuzTCssz5IxVID0no4Z8KYdWX5CEEdLXumR9qJHe6Fw~GQFeABGMbzS1SaSoSeNoQxovJ-sm~lFadUJ3ZemNpRxNQQtRQP8HBNxMqCNzrsyWXylhp5Q__" alt="Event Header" />
                </div>
                <div className="event-header-overlay">
                    <h2>Events &gt; RAFDA Event Sign Up</h2>
                </div>
            </div>
            <div className="image-containers">
                <img
                    src="https://s3-alpha-sig.figma.com/img/3891/ec52/3110f1a463becd8d34579e7f243cfa8d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6BLzebGvwtm6Y~jpJnL3~gFHNQJJURgyeUvyzQCarMNvOcBAHIxgyiHqQLOmrpL~jAaYmZynv~lN9G282irytD8MnRmYQiMyPKLBcl5dSKKEwToRugaWmNR6Zv2SwcYFP8kLb73XnLbLlpHcbHF7mNpr8c2~3DCZx3GZ~eBq7Q53w3PsyAwKG1Bd~8xI8pxveCOWz~DSb-BGojkTfCY46y7s6SaJqLgR0wXNOwGrJ2kQ7XdAJ8IHHh--OCWYZDBT3TeMjuJETMu9EwUKvlRLTJS1htuGx0e5w-cm1w94cTkVtiu~X5GECQoUSOn9iWekIcb0yFrzKnpSmDLB1iJ4g__"
                    alt="Event Header"
                    style={{ width: '800px', height: '800px', position: "relative", left: "550px", top: "50px" }} // Set width and height to minimal values
                />
            </div>

            <div className="form-container">
                {formSubmitted ? (
                    <div className="thank-you-message">
                        <h1>Thank You For Signing Up!</h1>
                        <p>We have received your information and will contact you soon.</p>
                    </div>
                ) : (
                    <>
                        <h1>Sign Up For RAFDA EVENT</h1>
                        <p>A Career Full Of Opportunities</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    placeholder="Mobile number"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group birthday">
                                <select
                                    name="month"
                                    value={formData.birthday.month}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            birthday: { ...formData.birthday, month: e.target.value },
                                        })
                                    }
                                >
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <select
                                    name="day"
                                    value={formData.birthday.day}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            birthday: { ...formData.birthday, day: e.target.value },
                                        })
                                    }
                                >
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="year"
                                    value={formData.birthday.year}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            birthday: { ...formData.birthday, year: e.target.value },
                                        })
                                    }
                                >
                                    {Array.from({ length: 100 }, (_, i) => (
                                        <option key={2024 - i} value={2024 - i}>
                                            {2024 - i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group gender">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === 'Male'}
                                        onChange={() => handleGenderChange('Male')}
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === 'Female'}
                                        onChange={() => handleGenderChange('Female')}
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Custom"
                                        checked={formData.gender === 'Custom'}
                                        onChange={() => handleGenderChange('Custom')}
                                    />
                                    Custom
                                </label>
                            </div>
                            <div className="form-group terms">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms
                                        }
                                        onChange={handleCheckboxChange}
                                        />
                                        I agree with <a href="#terms">Terms & Conditions</a>
                                        </label>
                                        </div>
                                        <button type="submit">Sign Up</button>
                                        </form>
                                        </>
                                        )}
                                        </div>
                                        <div className="page-content3">
                                        <hr />
                                        <div className="page-btm">
                                        <div className="socials">
                                        <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
                                        Share Page
                                        <FaFacebook style={{ marginLeft: '5px', marginRight: '5px' }} />
                                        <FaTwitter style={{ marginLeft: '5px', marginRight: '5px' }} />
                                        <FaInstagram style={{ marginLeft: '5px', marginRight: '5px' }} />
                                        </p>
                                        </div>
                                        <div className="btp">
                                        <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
                                        Back to Top
                                        </p>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        );
                                        }