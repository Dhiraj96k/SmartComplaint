import { FiBell, FiSearch } from "react-icons/fi";
import "./Topbar.css";

export default function Topbar() {
    return (
        <header className="topbar">
            <div className="topbar-left">
                <div className="search-box">
                    <FiSearch className="search-icon" />
                    <input placeholder="Search by complaint ID..." />
                </div>
            </div>

            <div className="topbar-right">
                <button className="top-btn bell">
                    <FiBell />
                </button>
                <div className="profile">
                    <img alt="user" className="profile-pic" />
                    <div className="profile-info">
                        <div className="p-name">John Doe</div>
                        <div className="p-email">john.doe@example.com</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
