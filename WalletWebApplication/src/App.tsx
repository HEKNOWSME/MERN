import { useState } from "react";
import { Transaction } from "./components/transactions/Transactions";
import "./App.css";
import Aside from "./components/aside/Aside";
import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Budget from "./components/budget/Budget";
import Reports from "./components/reports/Reports";
import Modal from "./components/Modal/Modal";
import Category from "./components/Modal/Category";
import Account from "./components/Modal/Account";
const App = () => {
	const [clickedPlace, setPlace] = useState("");
	const [showModal, setModal] = useState({
		transaction: false,
		category: false,
		account: false,
	});
	const [transactions] = useState<Transaction[]>([]);
	return (
		<div className="wrapper">
			<aside className="p-2">
				<Aside
					onIcon={(target) => {
						setPlace(target);
						setModal({
							...showModal,
							transaction: false,
							account: false,
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
										account: false,
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
										account: false,
									})
								}
							>
								Add Category
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() =>
									setModal({
										...showModal,
										transaction: false,
										category: false,
										account: !showModal.account,
									})
								}
							>
								Add Account
							</button>
						</div>
						{showModal.transaction && (
							<Modal
								onClose={() => setModal({ ...showModal, transaction: false })}
							/>
						)}
						{showModal.category && (
							<Category
								onClose={() => setModal({ ...showModal, category: false })}
							/>
						)}
						{showModal.account && (
							<Account
								onClose={() => setModal({ ...showModal, account: false })}
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
