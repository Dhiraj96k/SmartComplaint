// LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    return (
        <div className="login-wrapper">
            <div className="login-card">
                {/* Left Section */}
                <div className="login-left">
                    <div className="brand-box">
                        <div className="brand-icon"></div>
                        <h2 className="brand-title">ResolveComplaint</h2>
                    </div>

                    <h1 className="portal-title">Complaint Management Portal</h1>
                    <p className="portal-subtitle">Efficiently Resolving Your Concerns</p>
                </div>

                {/* Right Section */}
                <div className="login-right">
                    <h1 className="welcome">Welcome Back</h1>
                    <p className="signin-text">Sign in to your account</p>

                    {/* Role Switch */}
                    <div className="role-switch">
                        <button
                            className={role === "user" ? "active-role" : "role-btn"}
                            onClick={() => setRole("user")}
                        >
                            User
                        </button>
                        <button
                            className={role === "admin" ? "active-role" : "role-btn"}
                            onClick={() => setRole("admin")}
                        >
                            Admin
                        </button>
                    </div>

                    {/* Username */}
                    <label className="input-label">Username/Email</label>
                    <input type="text" className="input-box" placeholder="Enter your username or email" />

                    {/* Password */}
                    <label className="input-label">Password</label>
                    <div className="password-box">
                        <input type="password" placeholder="Enter your password" />
                        <span className="eye-icon">👁️</span>
                    </div>


                    <div className="remember-row">
                        <label><input type="checkbox" /> Remember Me</label>
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>

                    <div className="buttons">
                        <button className="login-btn">Log In</button>
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            Back
                        </button>
                    </div>


                    <p className="register-text">
                        Don't have an account? <a href="#" className="register-link">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
