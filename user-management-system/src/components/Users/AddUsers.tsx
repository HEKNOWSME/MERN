import { useForm } from "react-hook-form";
import { User } from "./Users";
interface Props {
	onAdd: (data: User) => void;
}
const AddUsers = ({ onAdd }: Props) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<User>();
	return (
		<form
			method="post"
			onSubmit={handleSubmit((data) => {
				onAdd(data);
				reset();
			})}
		>
			<h3 className="text-center">Please Add new User</h3>
			<div className="mb-3">
				<label htmlFor="username" className="form-label">
					Username
				</label>
				<input
					{...register("username", {
						required: "Field required",
						minLength: {
							value: 5,
							message: "Username should be At Least 5 characters",
						},
					})}
					type="text"
					name="username"
					id="username"
					className="form-control"
					autoComplete="username"
				/>
				{errors.username && (
					<span className="text-danger">{errors.username.message}</span>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					{...register("email", { required: "Field required" })}
					type="email"
					name="email"
					id="email"
					className="form-control"
					autoComplete="email"
				/>
				{errors.email && (
					<span className="text-danger">{errors.email.message}</span>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", {
						required: "Field required",
						valueAsNumber: true,
						min: { value: 1, message: "Amount should be above $1" },
					})}
					type="number"
					name="amount"
					id="amount"
					className="form-control"
					autoComplete="transaction-amount"
				/>
				{errors.amount && (
					<span className="text-danger">{errors.amount.message}</span>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="status" className="form-label">
					Select Status
				</label>
				<select
					{...register("status", { required: "Field required" })}
					name="status"
					aria-label="status"
					className="form-select"
				>
					<option value=""></option>
					<option value="pending">Pending</option>
					<option value="paid">Paid</option>
				</select>
				{errors.status && (
					<span className="text-danger">{errors.status.message}</span>
				)}
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default AddUsers;
