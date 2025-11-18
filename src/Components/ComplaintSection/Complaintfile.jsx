import React from "react";
import "./Complaintfile.css";

export default function Complaintfile() {
    const complaints = [
        { id: 1, title: "Street Light Not Working", desc: "The street light near my house has been out for 3 days." },
        { id: 2, title: "Garbage Collection Delay", desc: "Garbage has not been collected in the past week." },
        { id: 3, title: "Water Supply Issue", desc: "Low water pressure in the entire locality." },
        { id: 4, title: "Road Damage", desc: "Potholes causing difficulty for commuters." },
        { id: 5, title: "Noise Complaint", desc: "Construction noise continues past allowed hours." },
        { id: 6, title: "Sewage Overflow", desc: "Sewage leaking on the main street causing smell." }
    ];

    return (
        <section className="complaint-section">
            <h2 className="section-title">Recent Complaints</h2>

            <div className="complaint-grid">
                {complaints.map((item) => (
                    <div className="complaint-card" key={item.id}>
                        <h3 className="complaint-title">{item.title}</h3>
                        <p className="complaint-desc">{item.desc}</p>
                        <button className="view-btn">View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
