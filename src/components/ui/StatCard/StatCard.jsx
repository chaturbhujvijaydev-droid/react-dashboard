import "./StatCard.scss";

const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <span>{title}</span>
        <div className="stat-card__icon">{icon}</div>
      </div>

      <h2>{value}</h2>

      <p className="stat-card__change">{change}</p>
    </div>
  );
};

export default StatCard;