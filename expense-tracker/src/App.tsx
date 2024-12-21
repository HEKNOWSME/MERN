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
		{ id: 2, description: "Milk", amount: 200, category: "Food" },
	]);
	const [selected, setSelected] = useState("");
	const [searchItem, setSearch] = useState("");
	let originalExpenses = [...expenses];
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
		</>
	);
};

export default App;
