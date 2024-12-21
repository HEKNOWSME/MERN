import { useForm } from "react-hook-form";
import Categories from "./Categories";
import { Expense } from "./Expense";
interface Props {
	onSubmit: (expense: Expense) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Expense>();

	return (
		<form
			action=""
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
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
	);
};

export default ExpenseForm;
