// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-brand">
                    <h2 className="footer-logo">smartComplaint</h2>
                    <p className="footer-desc">Your trusted platform to raise and resolve complaints efficiently.</p>
                </div>

                {/* Middle Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Raise Complaint</a>
                    <a href="#">Contact Us</a>
                </div>

                {/* Right Section */}
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>Email: support@smartcomplaint.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 SmartComplaint. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
