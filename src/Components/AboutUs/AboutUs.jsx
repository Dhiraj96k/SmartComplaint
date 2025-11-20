import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.css";

export default function AboutUs() {
    return (
        <div className="about-container">
            <Header />
            {/* ---------------- HERO BANNER ---------------- */}
            <section className="hero-banner">
                <div className="hero-content">
                    <h1>Simplifying Complaint Management, Together.</h1>
                    <p>
                        smartComplaint is the all-in-one platform designed to streamline complaint
                        resolution and enhance customer satisfaction for good.
                    </p>
                </div>
            </section>

            {/* ---------------- OUR STORY ---------------- */}
            <section className="our-story">
                <h2>Our Story</h2>
                <p>
                    We noticed a common frustration: disconnected systems, slow response times,
                    and a lack of transparency in handling complaints. smartComplaint was born
                    from a desire to create a centralized, efficient, and user-friendly solution
                    to solve these challenges for good.
                </p>
            </section>

            {/* ---------------- MISSION & VISION ---------------- */}
            <section className="mission-vision">
                <div className="mv-card">
                    <div className="mv-icon">🚀</div>
                    <h3>Our Mission</h3>
                    <p>
                        To streamline complaint resolution by providing a powerful, intuitive, and
                        centralized platform for businesses and their customers.
                    </p>
                </div>

                <div className="mv-card">
                    <div className="mv-icon">👁️</div>
                    <h3>Our Vision</h3>
                    <p>
                        A world where every customer feels heard and every business can turn
                        feedback into an opportunity for growth and improvement.
                    </p>
                </div>
            </section>

            {/* ---------------- FEATURES ---------------- */}
            <section className="features-section">
                <h2>Key Features & Benefits</h2>
                <p className="section-subtitle">
                    Discover how our core features empower you to handle complaints with unparalleled
                    efficiency and insight.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Centralized Dashboard</h3>
                        <p>View all complaints and their statuses in one intuitive interface.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📄</div>
                        <h3>Automated Reporting</h3>
                        <p>Generate insightful reports to identify trends and improve service.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">⏱️</div>
                        <h3>Real-time Tracking</h3>
                        <p>Keep customers informed with live updates on their complaint status.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- CTA BANNER ---------------- */}
            <section className="cta-banner">
                <h2>Ready to Transform Your Complaint Management?</h2>
                <p>
                    Join us in creating a more responsive and customer-centric world.
                    Explore our features and see the difference.
                </p>

                <button className="cta-btn">Explore Features</button>
            </section>

            <Footer />

        </div>
    );
}
