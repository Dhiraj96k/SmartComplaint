import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <div className="logo">
                    <img className="logo-icon" />
                    <Link to={"/"} className="logo-text">SmartComplaint</Link>
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="#">Dashboard</Link>
                </nav>

                {/* Buttons */}
                <div className="btn-group">
                    <Link to="#" className="btn primary">Raise Complaint</Link>
                    <Link to="/login" className="btn outline">Login</Link>
                </div>

            </div>
        </header>
    );
}
