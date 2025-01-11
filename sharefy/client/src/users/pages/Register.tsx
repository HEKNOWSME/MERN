import { useForm } from "react-hook-form";
interface UserForm {
	username: string;
	email: string;
	password: string;
}
const Register = ({ onRegister }: { onRegister: () => void }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<UserForm>();
	return (
		<div className="">
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
					reset();
				})}
				className="card p-3 w-50 m-auto mt-5"
			>
				<div className="card-header text-center">
					<h3>Registration Form</h3>
				</div>
				<div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input
						{...register("username", { required: "Field Required" })}
						type="text"
						name="username"
						id="username"
						autoComplete="username"
						className="form-control"
					/>
					{errors.username && (
						<span className="text-danger">{errors.username.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Email
					</label>
					<input
						{...register("email", { required: "Field Required" })}
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						className="form-control"
					/>
					{errors.email && (
						<span className="text-danger">{errors.email.message}</span>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						{...register("password", {
							required: "Field Required",
							minLength: { value: 8, message: "Password Should Be 8 longer" },
						})}
						type="password"
						name="password"
						id="password"
						autoComplete="current-password"
						className="form-control"
					/>
					{errors.password && (
						<span className="text-danger">{errors.password.message}</span>
					)}
				</div>
				<div className="mb-3 d-flex justify-content-between">
					<button
						type="submit"
						className="btn btn-primary mx-4"
						disabled={!isValid}
					>
						Register
					</button>
					<button type="reset" className="btn btn-secondary mx-4">
						Reset
					</button>
				</div>
				<div className="mb-3 d-flex gap-3 align-items-center">
					<span>Have an account? </span>
					<button
						type="button"
						className="btn btn-primary"
						onClick={onRegister}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
