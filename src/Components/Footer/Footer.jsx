import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 className="footer-logo">smartComplaint</h2>
                    <p className="footer-desc">
                        Your trusted platform to raise and resolve complaints efficiently.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/raise-complaint">Raise Complaint</a>
                    <a href="/contact">Contact Us</a>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>support@smartcomplaint.com</p>
                    <p>+91 98765 43210</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 SmartComplaint. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
