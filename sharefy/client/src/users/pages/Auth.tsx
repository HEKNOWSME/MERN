import { useForm } from "react-hook-form";
interface UserForm {
	email: string;
	password: string;
}
const Auth = ({ onRegister }: { onRegister: () => void }) => {
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
               reset()
               console.log(data)
            })}
				className="card p-3 w-50 m-auto mt-5"
			>
				<div className="card-header text-center">
					<h3>Login</h3>
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
						Login
					</button>
					<button type="reset" className="btn btn-secondary mx-4">
						Reset
					</button>
				</div>
				<div className="mb-3 d-flex gap-3 align-items-center">
					<span>New To The website?</span>
					<button
						type="button"
						className="btn btn-primary"
						onClick={onRegister}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
