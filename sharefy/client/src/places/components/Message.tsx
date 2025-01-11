interface Props {
	onDelete: () => void;
	onCancel: () => void;
}
const Message = ({ onCancel, onDelete }: Props) => {
	return (
		<div className="card  position-fixed  top-50 start-50 translate-middle z-4">
			<div className="card-header d-flex justify-content-between align-items-center">
				<h3 className="">Are You Sure?</h3>
				<button
					type="button"
					aria-label="btn"
					className="btn btn-close btn-light"
				></button>
			</div>
			<div className="card-body">
				<p>
					Do you Want to Succeed and Delete This place? Please Note That It Can
					Not be undone thereafter
				</p>
			</div>
			<div className="card-footer d-flex justify-content-end">
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={() => onDelete()}
				>
					Delete
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary mx-3"
					onClick={() => onCancel()}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Message;
