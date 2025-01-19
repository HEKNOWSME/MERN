import { useState } from "react";
import { Transaction } from "./components/transactions/Transactions";
import "./App.css";
import Aside from "./components/aside/Aside";
import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Budget from "./components/budget/Budget";
import Reports from "./components/reports/Reports";
import Modal from "./components/Modal/Modal";
import { categories, subCategories } from "./components/share/shares";
import Categories from "./components/Modal/Category";
import { LuCirclePlus } from "react-icons/lu";
import ReportsGenerate from "./components/reports/ReportGenerate";
const App = () => {
	const [clickedPlace, setPlace] = useState("");
	const [showModal, setModal] = useState({
		transaction: false,
		category: false,
	});
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [allCategories, setCategory] = useState(categories);
	const [allSubCategories, setSubCategory] = useState(subCategories);
	const [budget, setBudget] = useState(0);
	const [dateFilter, setDateFilter] = useState({ from: "", to: "" });

	const filteredDate = transactions.filter(
		(transact) =>
			transact.date > dateFilter.from && transact.date < dateFilter.to
	);
	const handleDelete = (transaction: Transaction) => {
		setTransactions(transactions.filter((t) => t.id !== transaction.id));
	};
	return (
		<div className="wrapper">
			<aside className="p-2">
				<Aside
					onIcon={(target) => {
						setPlace(target);
						setModal({
							...showModal,
							transaction: false,
							category: false,
						});
					}}
				/>
			</aside>
			<main className={`position-relative ${showModal && "z-0"}`}>
				{clickedPlace === "" && (
					<Dashboard transactions={transactions} budget={budget} />
				)}
				{clickedPlace === "dashboard" && (
					<Dashboard transactions={transactions} budget={budget} />
				)}
				{clickedPlace === "transactions" && (
					<div>
						<div className="d-flex justify-content-between mb-3">
							<button
								type="button"
								className="btn btn-primary d-flex align-items-center gap-2"
								onClick={() =>
									setModal({
										...showModal,
										transaction: !showModal.transaction,
										category: false,
									})
								}
							>
								<LuCirclePlus />
								<span>Add Transaction</span>
							</button>
							<button
								type="button"
								className="btn btn-secondary d-flex align-items-center gap-2"
								onClick={() =>
									setModal({
										...showModal,
										transaction: false,
										category: !showModal.category,
									})
								}
							>
								<LuCirclePlus />
								<span>Add Category</span>
							</button>
						</div>
						{showModal.transaction && (
							<Modal
								categories={allCategories}
								subCategories={allSubCategories}
								onClose={() => setModal({ ...showModal, transaction: false })}
								onSubmit={(transaction) => {
									setTransactions([...transactions, transaction]);
									setModal({ category: false, transaction: false });
								}}
							/>
						)}
						{showModal.category && (
							<Categories
								onClose={() => setModal({ ...showModal, category: false })}
								onSubmit={(cat) => {
									setCategory([...allCategories, cat.category]);
									setSubCategory([...allSubCategories, cat.subCategory]);
									setModal({ category: false, transaction: false });
								}}
							/>
						)}
						<Transactions transactions={transactions} onDelete={handleDelete} />
					</div>
				)}
				{clickedPlace === "budget" && (
					<Budget
						budget={budget}
						onSave={(amount) => setBudget(amount.budget)}
					/>
				)}
				{clickedPlace === "reports" && (
					<div>
						{" "}
						<Reports
							onReport={(report) =>
								setDateFilter({ from: report.from, to: report.to })
							}
						/>
						<ReportsGenerate
							transactions={filteredDate}
							from={dateFilter.from}
							to={dateFilter.to}
						/>
					</div>
				)}
			</main>
		</div>
	);
};

export default App;
