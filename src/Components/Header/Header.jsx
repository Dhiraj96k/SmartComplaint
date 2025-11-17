// Header.jsx
import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <div className="logo-icon"></div>
                    <span className="logo-text">smartComplaint</span>
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Dashboard</a>
                    <a href="#">Goto</a>
                </nav>

                {/* Buttons */}
                <div className="btn-group">
                    <button className="btn primary">Raise Complaint</button>
                    <button className="btn outline">Login</button>
                </div>

            </div>
        </header>
    );
}
