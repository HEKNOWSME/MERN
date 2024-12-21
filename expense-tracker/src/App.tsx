import { useState } from "react";
import TableLists from "./components/TableLists";
import Filter from "./components/Filter";
import Search from "./components/Search";
interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}
const App = () => {
	const [expenses, setExpenses] = useState([
		{ id: 1, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 2, description: "Shoes", amount: 100, category: "Entertainment" },
		{ id: 3, description: "Milk", amount: 200, category: "Food" },
		{ id: 4, description: "Milk", amount: 200, category: "Food" },
		{ id: 5, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 6, description: "Shoes", amount: 100, category: "Entertainment" },
		{ id: 7, description: "Milk", amount: 200, category: "Food" },
		{ id: 8, description: "Milk", amount: 200, category: "Food" },
		{ id: 9, description: "Chair", amount: 300, category: "Utilities" },
		{ id: 10, description: "Shoes", amount: 100, category: "Entertainment" },
		{ id: 11, description: "Milk", amount: 200, category: "Food" },
		{ id: 12, description: "Milk", amount: 200, category: "Food" },
	]);
	const [selected, setSelected] = useState("");
	const [searchItem, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	let originalExpenses = [...expenses];

	//setting Pagination
	const itemsPerPage = 5;
	const totalPages = Math.ceil(originalExpenses.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	originalExpenses = originalExpenses.slice(startIndex, endIndex);
	const nextPage = () =>
		currentPage < totalPages && setCurrentPage((curr) => curr + 1);
	const prevPage = () => currentPage > 1 && setCurrentPage((curr) => curr - 1);
	selected &&
		(originalExpenses = expenses.filter(
			(expense) => expense.category == selected
		));

	searchItem &&
		(originalExpenses = expenses.filter((expense) =>
			expense.description.toLowerCase().includes(searchItem.toLowerCase())
		));

	const handleEdit = (expense: Expense) => {
		const updated = { ...expense, amount: 200 };
		setExpenses(
			originalExpenses.map((exp) => (exp.id === expense.id ? updated : exp))
		);
	};
	const handleDelete = (expense: Expense) => {
		setExpenses(originalExpenses.filter((ex) => ex.id !== expense.id));
	};

	return (
		<>
			<div className="mb-4 d-flex justify-content-between ">
				<Search onSearch={(text) => setSearch(text)} />
				<Filter
					onSelect={(cat) => {
						setSelected(cat);
					}}
				/>
			</div>
			<TableLists
				expenses={originalExpenses}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
			{!selected && searchItem === "" && (
				<div className="pagination d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={prevPage}
						disabled={currentPage === 1}
					>
						Prev
					</button>
					<button
						type="button"
						className="btn btn-outline-primary mx-3"
						onClick={nextPage}
						disabled={currentPage === totalPages}
					>
						Next
					</button>
				</div>
			)}
		</>
	);
};

export default App;
