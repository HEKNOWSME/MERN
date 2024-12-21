import { useState } from "react";
import TableLists from "./components/TableLists";
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
	]);
	let [originalExpenses, setOriginal] = useState([...expenses]);
	const handleEdit = (expense: Expense) => {
		const updated = { ...expense, amount: 200 };
		setOriginal(
			originalExpenses.map((exp) => (exp.id === expense.id ? updated : exp))
		);
	};
	const handleDelete = (expense: Expense) => {
		const newExpenses = originalExpenses.filter((ex) => ex.id !== expense.id);
		setOriginal(newExpenses);
	};
	return (
		<>
			<TableLists
				expenses={originalExpenses}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default App;
