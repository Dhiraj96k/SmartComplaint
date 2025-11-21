import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <div className="logo">
                    <img className="logo-icon" />
                    <Link to="/" className="logo-text">SmartComplaint</Link>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

                {/* Navigation + Buttons */}
                <div className={`nav-container ${menuOpen ? "open" : ""}`}>

                    <nav className="nav">
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                        <Link to="#">Dashboard</Link>
                    </nav>

                    <div className="btn-group">
                        <Link to="#" className="btn primary">Raise Complaint</Link>
                        <Link to="/login" className="btn outline">Login</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
