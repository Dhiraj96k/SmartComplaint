import { useState } from "react";
import Header from "../Header/Header";
import "./ContactUs.css";
import { Link } from "react-router-dom";

export default function ContactUsPage() {

    const [showSuccess, setShowSuccess] = useState(false);
    const [complaintId, setComplaintId] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();

        // random id generate for recent
        const generated = "CMP-" + Math.floor(10000 + Math.random() * 90000);
        setComplaintId(generated);

        setShowSuccess(true);
    };

    return (
        <>
            <Header />

            {/* SUCCESS PAGE */}
            {showSuccess ? (
                <div className="success-wrapper">
                    <div className="success-card">

                        <div className="success-icon">✔</div>

                        <h2>Thank You for Your Submission</h2>
                        <p className="success-desc">
                            Your complaint has been successfully received.
                            A confirmation email with the next steps has been sent to your registered address.
                            You can expect a response within 3–5 business days.
                        </p>

                        <div className="success-id-box">
                            <span>Your Complaint ID is:</span>
                            <strong>{complaintId}</strong>
                            <button
                                className="copy-btn"
                                onClick={() => navigator.clipboard.writeText(complaintId)}
                            >
                                Copy ID
                            </button>
                        </div>

                        <div className="success-buttons">
                            <Link className="primary-btn" to={"/"}>
                                Return to Homepage
                            </Link>
                        </div>

                    </div>
                </div>
            ) : (
                <>
                    {/* CONTACT FORM PAGE */}
                    <div className="contact-wrapper">

                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">
                            Get in touch with us. We’re here to help you.
                        </p>

                        <div className="contact-grid">

                            {/* LEFT — FORM */}
                            <form className="contact-form" onSubmit={handleSendMessage}>
                                <h2 className="form-title">Send us a Message</h2>

                                <label>Full Name</label>
                                <input type="text" placeholder="e.g., Good Name" required />

                                <label>Email Address</label>
                                <input type="email" placeholder="e.g., Good.Name@example.com" required />

                                <label>Message</label>
                                <textarea placeholder="Write your message here..." required />

                                <button className="send-btn" type="submit">
                                    Send Message
                                </button>
                            </form>

                            {/* RIGHT — INFO CARDS */}
                            <div className="contact-info">

                                <div className="info-card">
                                    <h3>Phone</h3>
                                    <p>+91 (555) 123-4567</p>
                                </div>

                                <div className="info-card">
                                    <h3>Email</h3>
                                    <p>support@smartcomplaint.com</p>
                                </div>

                                <div className="info-card">
                                    <h3>Office Address</h3>
                                    <p>
                                        000 Gurudwara Chowk, Akurdi 001 <br />
                                        Pune City, Akurdi 410355
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </>
            )}

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-left">
                        © 2025 smartComplaint. All rights reserved.
                    </p>

                    <div className="footer-right">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
