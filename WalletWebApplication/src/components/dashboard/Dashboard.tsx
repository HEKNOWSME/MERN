import { LuDollarSign } from "react-icons/lu";
import "./dashboard.css";
import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from "chart.js";
import { Transaction } from "../transactions/Transactions";

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title
);

interface DashboardProps {
	transactions: Transaction[];
	budget: number;
}

const Dashboard = ({ transactions, budget }: DashboardProps) => {
	const totalExpenses = transactions
		.filter((trans) => trans.type === "expense")
		.reduce((acc, curr) => acc + curr.amount, 0);
	const totalIncome = transactions
		.filter((trans) => trans.type === "income")
		.reduce((acc, curr) => acc + curr.amount, 0);
	const totalBalance = totalIncome + totalExpenses;
	const budgetRemaining = totalBalance - budget;
	const SummaryCard = ({
		title,
		amount,
	}: {
		title: string;
		amount: number;
	}) => (
		<div className="card">
			<p className="card-header d-flex flex-column gap-2">
				<span className="fw-bolder">{title}</span>
				<span>
					<i>
						<LuDollarSign />
					</i>
					{amount.toFixed(2)}
				</span>
			</p>
		</div>
	);

	const pieData = {
		labels: ["Income", "Expenses", "Budget Remaining"],
		datasets: [
			{
				data: [totalIncome, totalExpenses, budgetRemaining],
				backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
				hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
			},
		],
	};

	return (
		<div className="dashboard d-grid gap-3">
			<h4>Dashboard</h4>
			<div className="summary-cards">
				<SummaryCard title="Total Balance" amount={totalBalance} />
				<SummaryCard title="Total Expenses" amount={totalExpenses} />
				<SummaryCard title="Total Income" amount={totalIncome} />
				<SummaryCard title="Budget Remaining" amount={budgetRemaining} />
			</div>
			<div className="charts">
				<div>
					<h5>Overall Breakdown</h5>
					<Pie data={pieData} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
