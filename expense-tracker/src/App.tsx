import { useState } from "react";
import TableLists from "./components/TableLists";
import Filter from "./components/Filter";
import Search from "./components/Search";
import { Expense } from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
const App = () => {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 2, description: "Shoes", amount: 100, category: "Entertainment" },
		{ id: 3, description: "Milk", amount: 200, category: "Food" },
		{ id: 4, description: "Milk", amount: 200, category: "Food" },
		{ id: 5, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 15, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 6, description: "Chair", amount: 300, category: "Utilities" },
	]);

	const [selected, setSelected] = useState("");
	const [searchItem, setSearch] = useState("");
	const [currentPage, setPage] = useState(1);
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
	// pagination
	const numberOfExpenses = 5;
	const numberOfPages = Math.ceil(filteredExpenses.length / numberOfExpenses);
	const startIndex = (currentPage - 1) * numberOfExpenses;
	const endIndex = startIndex + numberOfExpenses;

	filteredExpenses = filteredExpenses.slice(startIndex, endIndex);
	const nextPage = () => {
		currentPage < numberOfPages && setPage((page) => page + 1);
	};
	const prevPage = () => {
		currentPage > 1 && setPage((page) => page - 1);
	};

	const handleEdit = (expense: Expense) => {
		const updated = { ...expense, amount: 200 };
		setExpenses(
			filteredExpenses.map((exp) => (exp.id === expense.id ? updated : exp))
		);
	};
	const handleDelete = (expense: Expense) => {
		setExpenses(filteredExpenses.filter((ex) => ex.id !== expense.id));
	};

	const handleAdd = (data: Expense) => {
		setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
	};
	return (
		<>
			<ExpenseForm onSubmit={handleAdd} />
			<div className="mb-4 d-flex justify-content-between ">
				<Search
					onSearch={(text) => {
						setSearch(text);
						setPage(1);
					}}
				/>
				<Filter
					onSelect={(cat) => {
						setSelected(cat);
					}}
				/>
			</div>
			<div className="d-flex justify-content-between">
				<span>
					All Expenses <span className="badge bg-black">{expenses.length}</span>
				</span>
				<span>
           <span className="badge bg-black">{filteredExpenses.length} in {expenses.length}</span>
				</span>
			</div>
			<TableLists
				expenses={filteredExpenses}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>

			<div className="mb3 d-flex justify-content-between">
				<button
					type="button"
					className="btn btn-outline-primary"
					disabled={currentPage === 1}
					onClick={prevPage}
				>
					Prev
				</button>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={nextPage}
					disabled={currentPage === numberOfPages}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default App;
