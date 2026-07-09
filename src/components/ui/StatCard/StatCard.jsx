import "./StatCard.scss";

const StatCard = ({ title, value, change, icon }) => {
  const isPositive = change.includes("+");

  return (
    <div className="stat-card">

      <div className="stat-card__header">
        <div>
          <p className="stat-card__title">{title}</p>
          <h2 className="stat-card__value">{value}</h2>
        </div>

        <div className="stat-card__icon">
          {icon}
        </div>
      </div>

      <div
        className={`stat-card__change ${
          isPositive ? "positive" : "negative"
        }`}
      >
        {change}
      </div>

    </div>
  );
};

export default StatCard;