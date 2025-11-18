import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
    return (
        <div className="register-container">
            <div className="register-left">
                <div className="logo-box">
                    <div className="logo-icon">🛡️</div>
                    <h2>ResolveComplaint</h2>
                </div>

                <h1>Complaint Management Portal</h1>
                <p>Efficiently Resolving Your Concerns</p>
            </div>

            <div className="register-right">
                <h2>Create an Account</h2>
                <p className="subtitle">Get started by creating your new account</p>

                <form className="register-form">

                    <div className="row">
                        <input type="text" placeholder="Enter your full name" />
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="row">
                        <input type="text" placeholder="Enter your mobile" />
                        <input type="number" placeholder="Enter your age" />
                    </div>

                    <div className="row">
                        <input type="text" placeholder="Enter pincode" />
                        <input type="text" placeholder="Enter your city" />
                    </div>

                    <div className="password-box">
                        <input type="password" placeholder="Enter your password" />
                        <span className="eye-icon">👁️</span>
                    </div>

                    <div className="password-box">
                        <input type="password" placeholder="Confirm your password" />
                        <span className="eye-icon">👁️</span>
                    </div>

                    <button type="submit" className="register-btn">Register</button>

                    <p className="bottom-text">
                        Already have an account?{" "}
                        <Link to="/login" className="login-link">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
