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
				<p className="card-header d-flex flex-column gap-2">
					<span className="fw-bolder">Budget Remaining</span>
					<span>
						<i>
							<LuDollarSign />
						</i>
						0.00
					</span>
				</p>
			</div>
			<div className="card">
				<h3 className="card-header">Spending by Category</h3>
			</div>
			<div className="card">
				<h3 className="card-header">Monthly Overview</h3>
			</div>
		</div>
	);
};

export default Dashboard;
