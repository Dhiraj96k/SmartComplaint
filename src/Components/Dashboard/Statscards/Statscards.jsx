import "./Statscards.css";

export default function Statscards({ title, value }) {
    return (
        <div className="stats-card">
            <div className="stats-label">{title}</div>
            <div className="stats-value">{value}</div>
        </div>
    );
}
