import { useState } from "react";
import TableLists from "./components/TableLists";
import Filter from "./components/Filter";
import Search from "./components/Search";
import { Expense } from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
import FormEdit from "./components/FormEdit";
const App = () => {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 2, description: "Shoes", amount: 100, category: "Entertainment" },
		{ id: 3, description: "Milk", amount: 200, category: "Food" },
		{ id: 4, description: "Milk", amount: 200, category: "Food" },
	]);

	const [selected, setSelected] = useState("");
	const [searchItem, setSearch] = useState("");
	const [show, setShow] = useState(false);
	const [toEdit, setEdit] = useState(false);
	const [expense, setExpense] = useState({
		id: 0,
		description: "",
		amount: 0,
		category: "",
	});
	// filtering
	let filteredExpenses = expenses.filter((expense) => {
		const returnedCategories = expense.category === selected;
		const searched = expense.description
			.toLowerCase()
			.includes(searchItem.toLowerCase());
		return returnedCategories && searched;
	});
	if (filteredExpenses.length === 0) {
		filteredExpenses = expenses.filter((expense) => {
			const searched = expense.description
				.toLowerCase()
				.includes(searchItem.toLowerCase());
			const allItems = expense.category !== "";
			return allItems && searched;
		});
	}
	const handleEdit = (data: Expense) => {
		setEdit(true);
		setShow(false);
		setExpense({
			id: data.id,
			description: data.description,
			amount: data.amount,
			category: data.category,
		});
	};
	const handleDelete = (expense: Expense) => {
		setExpenses(filteredExpenses.filter((ex) => ex.id !== expense.id));
	};

	const handleAdd = (data: Expense) => {
		setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
		setShow(false);
	};

	return (
		<>
			<div className="d-flex justify-content-end">
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => {
						setShow(!show);
						setEdit(false);
					}}
				>
					Add Expenses
				</button>
			</div>
			<h2 className="text-center">Expenses Tracker</h2>
			{show && <ExpenseForm onSubmit={handleAdd} />}
			{toEdit && (
				<FormEdit
					description={expense.description}
					amount={expense.amount}
					category={expense.category}
					onEdit={(data) => {
						setEdit(false);
						setExpenses(
							expenses.map((exp) =>
								exp.id == expense.id
									? {
											id: expense.id,
											amount: data.amount,
											category: data.category,
											description: data.description,
									  }
									: exp
							)
						);
					}}
				/>
			)}
			<div className="mb-4 d-flex justify-content-between ">
				<Search
					onSearch={(text) => {
						setSearch(text);
					}}
				/>
				<Filter
					onSelect={(cat) => {
						setSelected(cat);
					}}
				/>
			</div>
			<div className="d-flex justify-content-between mb-2">
				<span>
					All Expenses <span className="badge bg-black">{expenses.length}</span>
				</span>
			</div>
			<TableLists
				expenses={filteredExpenses}
				onEdit={(data) => handleEdit(data)}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default App;
