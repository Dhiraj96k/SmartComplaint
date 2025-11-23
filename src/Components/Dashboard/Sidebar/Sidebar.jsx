import { FiGrid, FiLogOut, FiMapPin, FiPlusCircle, FiSettings, FiUser } from "react-icons/fi";

import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-top">
                <img alt="logo" className="sidebar-logo-img" />
                <div className="sidebar-brand">
                    <div className="brand-title">Complaint</div>
                    <div className="brand-sub">Center</div>
                </div>
            </div>

            <nav className="sidebar-nav">
                <a className="nav-item active">
                    <FiGrid className="nav-icon" />
                    <span>Dashboard</span>
                </a>

                <a className="nav-item">
                    <FiPlusCircle className="nav-icon" />
                    <span>Raise Complaint</span>
                </a>

                <a className="nav-item">
                    <FiMapPin className="nav-icon" />
                    <span>Track Complaints</span>
                </a>

                <a className="nav-item">
                    <FiUser className="nav-icon" />
                    <span>Profile</span>
                </a>
            </nav>

            <div className="sidebar-bottom">
                <a className="nav-item small">
                    <FiSettings className="nav-icon" />
                    <span>Settings</span>
                </a>

                <Link className="nav-item small" to={"/"}>
                    <FiLogOut className="nav-icon" />
                    <span>Logout</span>
                </Link>
            </div>
        </aside>
    );
}
