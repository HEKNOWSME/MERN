import { useState } from "react";
import TableLists from "./components/TableLists";
import Filter from "./components/Filter";
import Search from "./components/Search";
import { Expense } from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
import Categories from "./components/Categories";
import { useForm } from "react-hook-form";
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
	const [expenseForm, setExpenseForm] = useState({
		id: 0,
		amount: 0,
		category: "",
		description: "",
	});
	const [toEdit, setEdit] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Expense>();
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
	const handleEdit = (expense: Expense) => {
		setEdit(true);
		setShow(false);
		setExpenseForm({
			id: expense.id,
			description: expense.description,
			amount: expense.amount,
			category: expense.category,
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
				<form
					onSubmit={handleSubmit(() => {
						setExpenses(
							expenses.map((expense) =>
								expense.id === expenseForm.id ? expenseForm : expense
							)
						);
						setEdit(false);
					})}
				>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<input
							{...register("description", {
								required: "description Required",
								minLength: {
									value: 3,
									message: "Item should be at Least 5 charters",
								},
							})}
							type="text"
							name="description"
							id="description"
							className="form-control border-primary"
							value={expenseForm.description}
							onChange={(e) =>
								setExpenseForm({ ...expenseForm, description: e.target.value })
							}
						/>
						{errors.description && (
							<span className="text-danger">{errors.description.message}</span>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="amount" className="form-label">
							Amount
						</label>
						<input
							{...register("amount", {
								required: "amount Required",
								valueAsNumber: true,
								min: {
									value: 1,
									message: "Do not go below 1",
								},
							})}
							type="number"
							name="amount"
							id="amount"
							className="form-control border-primary"
							min={0}
							value={expenseForm.amount}
							onChange={(e) => {
								setExpenseForm({
									...expenseForm,
									amount: e.target.value ? parseInt(e.target.value): 0,
								});
							}}
						/>
						{errors.amount && (
							<span className="text-danger">{errors.amount.message}</span>
						)}
					</div>
					<div className="mb-3">
						<select
							{...register("category", { required: "Category is required" })}
							name="category"
							aria-label="category"
							className="form-select border-primary"
							value={expenseForm.category}
							onChange={(e) => {
								setExpenseForm({ ...expenseForm, category: e.target.value });
							}}
						>
							<option value="">Select</option>
							{Categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
						{errors.category && (
							<span className="text-danger">{errors.category.message}</span>
						)}
					</div>
					<div className="mb-5">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
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
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
		</>
	);
};

export default App;
