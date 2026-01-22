import { type ReactNode } from "react";
import "./Statcard.css";
interface StatCardProps {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  icon: ReactNode;
}

const StatCard = ({
  title,
  amount,
  percentage,
  isPositive,
  icon,
}: StatCardProps) => {
  return (
    <div className="stat-card-box">
      <div className="stat-content">
        <div className="stat-info">
          <p className="stat-title">{title}</p>
          <h3 className="stat-amount">{amount}</h3>
          <p className="stat-detail">
            <span className={isPositive ? "text-success" : "text-danger"}>
              {percentage}
            </span>
            <span className="stat-time"> Since last month</span>
          </p>
        </div>
        <div className="stat-icon-square">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
