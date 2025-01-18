import "./Modal.css";
interface Props {
	onClose: () => void;
}
const Account = ({ onClose }: Props) => {
	return (
		<form className="showModal bg-body-tertiary card ">
			<div className="d-flex justify-content-end">
				<span className="mt-0 fs-3 cursor" onClick={onClose}>
					&times;
				</span>
			</div>
			<div className="mb-1">
				<input
					type="text"
					name="account"
					id="account"
					className="form-control placeholder-wave"
					placeholder="Add account"
				/>
			</div>
			<button type="button" className="btn btn-primary">
				Save Account{" "}
			</button>
		</form>
	);
};

export default Account;
