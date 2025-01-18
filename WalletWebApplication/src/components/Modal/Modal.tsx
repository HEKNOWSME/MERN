import "./Modal.css";
interface Props {
	onClose: () => void;
}
const Modal = ({ onClose }: Props) => {
	return (
		<form className="showModal bg-body-tertiary card ">
			<div className="d-flex justify-content-end">
				<span className="mt-0 fs-3 cursor" onClick={onClose}>
					&times;
				</span>
			</div>
			<div className="mb-1">
				<select
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
					type="text"
					name="description"
					id="description"
					className="form-control placeholder-wave"
					placeholder="Add description"
				/>
			</div>
			<div className="mb-1">
				<input
					type="number"
					name="amount"
					id="amount"
					className="form-control placeholder-wave"
					placeholder="Add amount"
				/>
			</div>
			<div className="mb-1">
				<select
					name="category"
					id="category"
					className="form-select placeholder-wave"
					aria-label="category"
				>
					<option value="">Category</option>
					<option value="income">Income</option>
				</select>
			</div>
			<div className="mb-1">
				<select
					name="account"
					id="account"
					className="form-select placeholder-wave"
					aria-label="account"
				>
					<option value="">account</option>
					<option value="income">Income</option>
				</select>
			</div>

			<div className="mb-3">
				<input
					type="date"
					name="date"
					id="date"
					className="form-control placeholder-wave"
					aria-label="date"
				/>
			</div>
			<div className="d-flex justify-content-between">
				<button type="button" className="btn btn-primary">
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
