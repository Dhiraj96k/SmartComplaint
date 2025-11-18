import './Register.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="register-container">
            {/* Left Section */}
            <div className="register-left">
                <div className="portal-info">
                    <div className="portal-logo">🔰</div>
                    <h2>ResolveComplaint</h2>
                    <h1>Complaint Management Portal</h1>
                    <p>Efficiently Resolving Your Concerns</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="register-right">
                <div className="register-box">
                    <h1>Create an Account</h1>
                    <p className="subtitle">Get started by creating your new account</p>

                    {/* Full Name */}
                    <label>Full Name</label>
                    <div className="input-box">
                        <span className="icon">👤</span>
                        <input type="text" placeholder="Enter your full name" />
                    </div>

                    {/* Email */}
                    <label>Email Address</label>
                    <div className="input-box">
                        <span className="icon">📧</span>
                        <input type="email" placeholder="Enter your email address" />
                    </div>

                    {/* Password */}
                    <label>Password</label>
                    <div className="input-box">
                        <span className="icon">🔒</span>
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Enter your password"
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? "🙈" : "👁️"}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <label>Confirm Password</label>
                    <div className="input-box">
                        <span className="icon">🔒</span>
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm your password"
                        />
                        <span
                            className="eye-icon"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? "🙈" : "👁️"}
                        </span>
                    </div>

                    {/* Register Button */}
                    <button className="register-btn">Register</button>

                    <p className="login-text">
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
