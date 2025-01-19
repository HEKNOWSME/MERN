import { useForm } from "react-hook-form";

interface Report {
	from: string;
	to: string;
}
const Reports = ({ onReport }: { onReport: (report: Report) => void }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<Report>();
	return (
		<div className="p-4">
			<h3>Generate Your Report With desired Date</h3>
			<form
				onSubmit={handleSubmit((data) => {
					onReport(data);
					reset();
				})}
			>
				<div className="d-flex gap-3 align-items-center">
					<div className="mb-3">
						<label htmlFor="from" className="form-label">
							From
						</label>
						<input
							{...register("from", { required: "Start date required" })}
							type="date"
							name="from"
							id="from"
							className="form-control placeholder-wave"
						/>
						{errors.from && (
							<span className="text-danger">{errors.from.message}</span>
						)}
					</div>
					<div className="mb-3">
						<label htmlFor="to" className="form-label">
							To
						</label>
						<input
							{...register("to", { required: "End date required" })}
							type="date"
							name="to"
							id="to"
							className="form-control placeholder-wave"
						/>
						{errors.to && (
							<span className="text-danger">{errors.to.message}</span>
						)}
					</div>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
						Generate
					</button>
				</div>
			</form>
		</div>
	);
};

export default Reports;
