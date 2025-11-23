import React from "react";
import "./Recenttable.css";

export default function Recenttable({ items = [] }) {
    return (
        <div className="recent-table">
            <h3>Recent Activity</h3>

            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>COMPLAINT ID</th>
                            <th>SUBJECT</th>
                            <th>DATE SUBMITTED</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td className="subject">{row.subject}</td>
                                <td>{row.date}</td>
                                <td>
                                    <span className={`status ${row.statusClass}`}>{row.status}</span>
                                </td>
                                <td className="view">View Details</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
