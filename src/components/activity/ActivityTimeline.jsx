import "./ActivityTimeline.scss";

const activities = [
  {
    id: 1,
    title: "New user registered",
    description: "John Doe created a new account.",
    time: "2 min ago",
    color: "#2563eb",
  },
  {
    id: 2,
    title: "Order Delivered",
    description: "Order #4582 has been delivered.",
    time: "15 min ago",
    color: "#22c55e",
  },
  {
    id: 3,
    title: "Payment Received",
    description: "Received payment of ₹18,500.",
    time: "1 hour ago",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Server Updated",
    description: "Deployment completed successfully.",
    time: "Yesterday",
    color: "#ef4444",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="activity-card">

      <div className="activity-header">
        <h5>Activity Timeline</h5>
      </div>

      <div className="timeline">

        {activities.map((item) => (
          <div
            className="timeline-item"
            key={item.id}
          >
            <div
              className="timeline-dot"
              style={{ background: item.color }}
            />

            <div className="timeline-content">
              <h6>{item.title}</h6>
              <p>{item.description}</p>
              <small>{item.time}</small>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ActivityTimeline;