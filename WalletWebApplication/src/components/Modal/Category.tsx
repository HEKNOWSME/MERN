import "./Modal.css";
interface Props {
	onClose: () => void;
}
const Category = ({ onClose }: Props) => {
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
					name="category"
					id="category"
					className="form-control placeholder-wave"
					placeholder="Add category"
				/>
			</div>
			<div className="mb-3">
				<input
					type="text"
					name="subCategory"
					id="amount"
					className="form-control placeholder-wave"
					placeholder="Add subCategory"
				/>
			</div>
			<button type="button" className="btn btn-primary">
				Save Category{" "}
			</button>
		</form>
	);
};

export default Category;
