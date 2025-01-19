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
const App = () => {
	const [clickedPlace, setPlace] = useState("");
	const [showModal, setModal] = useState({
		transaction: false,
		category: false,
	});
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [allCategories, setCategory] = useState(categories);
	const [allSubCategories, setSubCategory] = useState(subCategories);
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
				{clickedPlace === "" && <Dashboard />}
				{clickedPlace === "dashboard" && <Dashboard />}
				{clickedPlace === "transactions" && (
					<div>
						<div className="d-flex justify-content-between mb-3">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() =>
									setModal({
										...showModal,
										transaction: !showModal.transaction,
										category: false,
									})
								}
							>
								Add Transaction
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() =>
									setModal({
										...showModal,
										transaction: false,
										category: !showModal.category,
									})
								}
							>
								Add Category
							</button>
						</div>
						{showModal.transaction && (
							<Modal
								categories={allCategories}
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
								}}
							/>
						)}
						<Transactions transactions={transactions} />
					</div>
				)}
				{clickedPlace === "budget" && <Budget />}
				{clickedPlace === "reports" && <Reports />}
			</main>
		</div>
	);
};

export default App;
