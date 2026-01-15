import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [role, setRole] = useState("user");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const access = async (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            alert("Please enter both username and password");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    role,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            // Save token (example)
            localStorage.setItem("token", data.token);

            alert("Login successful!");

            // Role-based navigation
            if (role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/user-dashboard");
            }

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

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
                            type="button"
                            className={role === "user" ? "active-role" : "role-btn"}
                            onClick={() => setRole("user")}
                        >
                            User
                        </button>
                        <button
                            type="button"
                            className={role === "admin" ? "active-role" : "role-btn"}
                            onClick={() => setRole("admin")}
                        >
                            Admin
                        </button>
                    </div>

                    <form onSubmit={access}>
                        {/* Username */}
                        <label className="input-label">Username / Email</label>
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Enter your username or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {/* Password */}
                        <label className="input-label">Password</label>
                        <div className="password-box">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(prev => !prev)}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>

                        <div className="remember-row">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href="#" className="forgot-link">
                                Forgot Password?
                            </a>
                        </div>

                        <div className="buttons">
                            <button
                                type="submit"
                                className="login-btn"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>

                            <button
                                type="button"
                                className="back-btn"
                                onClick={() => navigate("/")}
                            >
                                Back
                            </button>
                        </div>
                    </form>

                    <p className="register-text">
                        Don't have an account?{" "}
                        <Link to="/register" className="register-link">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
