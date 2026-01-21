import StatCard from "../components/Statcard";
import ChartsRow from "../components/ChartsRow";
import TablesRow from "../components/TablesRow"; 
import { FaWallet, FaGlobe, FaFileAlt, FaShoppingCart } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="stats-container-grid">
        <StatCard
          title="TODAY'S MONEY"
          amount="$53,897"
          percentage="+3.48%"
          isPositive={true}
          icon={<FaWallet />}
        />
        <StatCard
          title="TODAY'S USERS"
          amount="3,200"
          percentage="+5.20%"
          isPositive={true}
          icon={<FaGlobe />}
        />
        <StatCard
          title="NEW CLIENTS"
          amount="+2,503"
          percentage="-2.82%"
          isPositive={false}
          icon={<FaFileAlt />}
        />
      </div>

      <div className="single-card-row">
        <StatCard
          title="TOTAL SALES"
          amount="$173,000"
          percentage="+8.12%"
          isPositive={true}
          icon={<FaShoppingCart />}
        />
      </div>
      <ChartsRow />
      <TablesRow />
    </>
  );
};

export default Dashboard;
