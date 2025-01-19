import { useForm } from "react-hook-form";
import { Transaction } from "../transactions/Transactions";
import "./Modal.css";
import { accounts } from "../share/shares";
interface Props {
	onClose: () => void;
	onSubmit: (data: Transaction) => void;
	subCategories: string[];
	categories: string[];
}
const Modal = ({ onClose, onSubmit, categories, subCategories }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Transaction>();
	return (
		<form
			className="showModal bg-body-tertiary card "
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<div className="d-flex justify-content-end">
				<span className="mt-0 fs-3 cursor" onClick={onClose}>
					&times;
				</span>
			</div>
			<div className="mb-1">
				<select
					{...register("type", { required: "Field is required" })}
					name="type"
					id="type"
					className="form-select placeholder-wave"
					aria-label="type"
				>
					<option value="expense">Expense</option>
					<option value="income">Income</option>
				</select>
			</div>
			<div className="mb-1">
				<input
					{...register("description", {
						required: "Field is required",
						maxLength: {
							value: 20,
							message: "Description Not Exceed 20 Characters",
						},
					})}
					type="text"
					name="description"
					id="description"
					className="form-control placeholder-wave"
					placeholder="Description..."
				/>
				{errors.description && (
					<span className="text-danger">{errors.description.message}</span>
				)}
			</div>
			<div className="mb-1">
				<input
					{...register("amount", {
						required: "Field is required",
						valueAsNumber: true,
					})}
					type="number"
					name="amount"
					id="amount"
					className="form-control placeholder-wave"
					placeholder="Amount $"
				/>
				{errors.amount && (
					<span className="text-danger">{errors.amount.message}</span>
				)}
			</div>
			<div className="mb-1">
				<select
					{...register("category", { required: "Field is required" })}
					name="category"
					id="category"
					className="form-select placeholder-wave"
					aria-label="category"
				>
					<option value="">Choose Category</option>
					{categories.map((cat) => (
						<option value={cat} key={cat}>
							{cat}
						</option>
					))}
				</select>
				{errors.category && (
					<span className="text-danger">{errors.category.message}</span>
				)}
			</div>
			<div className="mb-1">
				<select
					{...register("subCategory", { required: "Field is required" })}
					name="subCategory"
					id="subCategory"
					className="form-select placeholder-wave"
					aria-label="subCategory"
				>
					<option value="">Choose SubCategory</option>
					{subCategories.map((cat, index) => (
						<option value={cat} key={index}>
							{cat}
						</option>
					))}
				</select>
				{errors.subCategory && (
					<span className="text-danger">{errors.subCategory.message}</span>
				)}
			</div>
			<div className="mb-1">
				<select
					{...register("account", { required: "Field is required" })}
					name="account"
					id="account"
					className="form-select placeholder-wave"
					aria-label="account"
				>
					{accounts.map((acc, i) => (
						<option value={acc} key={i}>{acc}</option>
					))}
				</select>
				{errors.account && (
					<span className="text-danger">{errors.account.message}</span>
				)}
			</div>

			<div className="mb-3">
				<input
					{...register("date", { required: "Field is required" })}
					type="date"
					name="date"
					id="date"
					className="form-control placeholder-wave"
					aria-label="date"
				/>
				{errors.date && (
					<span className="text-danger">{errors.date.message}</span>
				)}
			</div>
			<div className="d-flex justify-content-between">
				<button type="submit" className="btn btn-primary">
					Add{" "}
				</button>
				<button type="reset" className="btn btn-primary">
					Clear
				</button>
			</div>
		</form>
	);
};

export default Modal;
