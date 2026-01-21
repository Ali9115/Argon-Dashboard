import "./Tables.css"; 

const TablesRow: React.FC = () => {
  const pageVisitsData = [
    { name: "/argon/", visitors: "4,569", users: "340", rate: "46,53%" },
    { name: "/argon/index.html", visitors: "3,985", users: "319", rate: "46,53%" },
    { name: "/argon/charts.html", visitors: "3,513", users: "294", rate: "36,49%" },
    { name: "/argon/tables.html", visitors: "2,050", users: "147", rate: "50,87%" },
    { name: "/argon/profile.html", visitors: "1,795", users: "190", rate: "46,53%" },
  ];

  const socialTrafficData = [
    { referral: "Facebook", visitors: "1,480", percentage: 60, color: "#ed8936" },
    { referral: "Facebook", visitors: "5,480", percentage: 70, color: "#f6ad55" },
    { referral: "Google", visitors: "4,807", percentage: 80, color: "#3182ce" },
    { referral: "Instagram", visitors: "3,678", percentage: 75, color: "#4299e1" },
    { referral: "Facebook", visitors: "2,645", percentage: 30, color: "#ed8936" },
  ];

  return (
    <div className="tables-grid-layout">
      <div className="table-card">
        <div className="table-header-container">
          <h3 className="table-title">Page visits</h3>
          <button className="btn-see-all">SEE ALL</button>
        </div>
        <table className="custom-table">
          <thead className="custom-table-head">
            <tr>
              <th>PAGE NAME</th>
              <th>VISITORS</th>
              <th>UNIQUE USERS</th>
              <th>BOUNCE RATE</th>
            </tr>
          </thead>
          <tbody>
            {pageVisitsData.map((row, i) => (
              <tr key={i} className="table-row">
                <td className="table-cell-bold">{row.name}</td>
                <td className="table-cell">{row.visitors}</td>
                <td className="table-cell">{row.users}</td>
                <td className="table-cell">{row.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-card">
        <div className="table-header-container">
          <h3 className="table-title">Social traffic</h3>
          <button className="btn-see-all">SEE ALL</button>
        </div>
        <table className="custom-table">
          <thead className="custom-table-head">
            <tr>
              <th>REFERRAL</th>
              <th>VISITORS</th>
              <th style={{ width: "120px" }}></th> 
            </tr>
          </thead>
          <tbody>
            {socialTrafficData.map((row, i) => (
              <tr key={i} className="table-row">
                <td className="table-cell-bold">{row.referral}</td>
                <td className="table-cell">{row.visitors}</td>
                <td className="table-cell">
                  <div className="progress-container">
                    <span>{row.percentage}%</span>
                    <div className="progress-track">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${row.percentage}%`,
                          backgroundColor: row.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesRow;