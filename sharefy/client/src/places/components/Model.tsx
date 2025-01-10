import "./PopUp.css";
interface Props {
	placeTitle: string;
	imageUrl: string;
	description: string;
	onClose: () => void;
}
const PopUp = ({ placeTitle, imageUrl, onClose, description }: Props) => {
	return (
		<div className="card position-fixed top-50 start-50 translate-middle bg-body-secondary">
			<div className="card-header text-center d-flex justify-content-between">
				<span>{placeTitle}</span>
				<button
					type="button"
					className="btn btn-close"
					onClick={() => onClose()}
					aria-label="close"
				></button>
			</div>
			<div className="card-body">
				<img src={imageUrl} alt="" className="card-img" />
			</div>
			<div className="card-footer text-center">{description}</div>
		</div>
	);
};

export default PopUp;
