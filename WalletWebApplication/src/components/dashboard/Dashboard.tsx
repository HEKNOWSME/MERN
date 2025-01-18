import { LuDollarSign } from "react-icons/lu";
import "./dashboard.css";
const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="card">
				<p className="card-header d-flex flex-column gap-2">
					<span className="fw-bolder">Total Balance</span>
					<span>
						<i>
							<LuDollarSign />
						</i>
						235
					</span>
				</p>
			</div>
			<div className="card">
				<p className="card-header d-flex flex-column gap-2">
					<span className="fw-bolder">Total Expenses</span>
					<span>
						<i>
							<LuDollarSign />
						</i>
						235
					</span>
				</p>
			</div>
			<div className="card">
				<p className="card-header d-flex flex-column gap-2">
					<span className="fw-bolder">Total Income</span>
					<span>
						<i>
							<LuDollarSign />
						</i>
						235
					</span>
				</p>
         </div>
         <div className="card">
            <h3 className="card-header">Statistic Graph Here</h3>
         </div>
		</div>
	);
};

export default Dashboard;
