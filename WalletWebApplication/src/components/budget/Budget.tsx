import { useForm } from "react-hook-form";
type  Budget = {
  budget: number
} 
interface Props {
	budget: number;
	onSave: (amount: Budget) => void;
}

const Budget = ({ budget, onSave }: Props) => {
	const { register, reset, handleSubmit } = useForm<Budget>();
	return (
		<div>
			<h3>Budget Settings</h3>
			<h4 className="text-center">Set Budget Limits</h4>
			<form
				className="card p-3 w-50 m-auto mb-2"
				onSubmit={handleSubmit((data) => {
					onSave(data);
					reset();
				})}
			>
				<div className="mb-3">
					<label htmlFor="budget" className="form-label">
						Monthly Budget Amount
					</label>
					<input
						{...register("budget")}
						type="number"
						className="form-control placeholder-wave"
						id="budget"
						min={0}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Save Budget
				</button>
			</form>
			<div className="">
				<button type="button" className="btn card">
					Your current Monthly budget is {budget} ${" "}
				</button>
			</div>
		</div>
	);
};

export default Budget;
