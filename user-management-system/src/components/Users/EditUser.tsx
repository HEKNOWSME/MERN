import { useForm } from "react-hook-form";
import { User } from "./Users";
import { useState } from "react";
interface Props {
	username: string;
	email: string;
	amount: number;
	status: string;
	onSubmit: (user: User) => void;
}
const EditUser = ({ username, email, amount, status, onSubmit }: Props) => {
	const [user, setUser] = useState<User>({
		id: 0,
		username: username,
		email: email,
		amount: amount,
		status: status,
	});

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
				onSubmit(data);
				reset();
			})}
		>
         <h3 className="text-center">Please Edit { username}</h3>
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
					className="form-control "
					autoComplete="username"
					value={user.username}
					onChange={(e) => setUser({ ...user, username: e.target.value })}
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
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
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
						max: { value: 10_000, message: "Do not exceed $10,000" },
					})}
					type="number"
					name="amount"
					id="amount"
					className="form-control"
					autoComplete="transaction-amount"
					value={user.amount ? user.amount : ""}
					onChange={(e) =>
						setUser({ ...user, amount: parseInt(e.target.value) })
					}
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
					value={status}
					onChange={(e) => setUser({ ...user, status: e.target.value })}
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

export default EditUser;
