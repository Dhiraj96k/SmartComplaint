import Recenttable from "./Recenttable/Recenttable";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Statscards from "./Statscards/Statscards";
import "./Dashboard.css";

export default function Dashboard() {
    const recent = [
        { id: "#TKT-12345", subject: "Faulty Product Delivery", date: "2023-10-26", status: "In Progress", statusClass: "inprogress" },
        { id: "#TKT-12344", subject: "Billing Discrepancy", date: "2023-10-24", status: "Resolved", statusClass: "resolved" },
        { id: "#TKT-12342", subject: "Poor Customer Service Experience", date: "2023-10-22", status: "Needs Action", statusClass: "needs" },
        { id: "#TKT-12340", subject: "Late Delivery", date: "2023-10-20", status: "Closed", statusClass: "closed" }
    ];

    return (
        <div className="dashboard-root">
            <Sidebar />
            <Topbar />

            <main className="dashboard-main">
                <div className="dashboard-header">
                    <div>
                        <h1>Welcome, John!</h1>
                        <p className="sub">Here's a summary of your complaint activity.</p>
                    </div>

                    <div className="actions">
                        <button className="primary-action">Raise a New Complaint</button>
                        <button className="secondary-action">View All Complaints</button>
                    </div>
                </div>

                <div className="stats-row">
                    <Statscards title="In Progress" value="3" />
                    <Statscards title="Resolved" value="5" />
                    <Statscards title="Needs Action" value="1" />
                    <Statscards title="Total Submitted" value="9" />
                </div>

                <Recenttable items={recent} />
            </main>
        </div>
    );
}
