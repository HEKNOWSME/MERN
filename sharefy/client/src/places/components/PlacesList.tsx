import { Link } from "react-router-dom";
import { Place } from "../pages/Places";
import "./places.css";
import PopUp from "./Model";
import { useState } from "react";

interface Props {
	places: Place[];
	onDelete: (place: Place) => void;
}
export const PlacesList = ({ places, onDelete }: Props) => {
	const [isShowMap, setMap] = useState(false);
	const [viewedPlace, setPlace] = useState<Place>({
		id: "",
		address: "",
		description: "",
		creator: "",
		location: { latitude: "", longitude: "" },
		title: "",
		imageUrl: "",
	});
	const handleViewMap = (place: Place) => {
		setPlace({
			...viewedPlace,
			title: place.title,
			description: place.description,
			id: place.id,
			imageUrl: place.imageUrl,
			address: place.address,
		});
		setMap(true);
	};
	const handleOnclose = () => {
		setMap(false);
	};
	if (places.length === 0)
		return (
			<div className="card text-center p-3 fw-bolder">No Place Available</div>
		);
	return (
		<div className="position-relative">
			<section className={`places mt-1 z-0 ${isShowMap && "isOpened"}`}>
				{places.map((place) => (
					<article className="card" key={place.id}>
						<img
							src={place.imageUrl}
							className="card-image"
							alt={place.address}
						/>
						<div className="card-body">
							<p> {place.title}</p>
							<span> {place.address}</span>
							<span> {place.description}</span>
						</div>
						<div className="card-footer d-flex gap-2 justify-content-center">
							<button
								type="button"
								className="btn btn-outline-primary"
								disabled={isShowMap}
								onClick={() => {
									handleViewMap(place);
								}}
							>
								View On Map
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary"
								disabled={isShowMap}
							>
								<Link
									to={`/places/${place.id}`}
									className="nav-link"
									disabled={isShowMap}
								>
									Edit
								</Link>
							</button>
							<button
								type="button"
								className="btn btn-outline-danger"
								disabled={isShowMap}
								onClick={() => onDelete(place)}
							>
								Delete
							</button>
						</div>
					</article>
				))}
			</section>
			{isShowMap && (
				<PopUp
					placeTitle={viewedPlace.title}
					imageUrl={viewedPlace.imageUrl}
					description={viewedPlace.description}
					onClose={handleOnclose}
				/>
			)}
		</div>
	);
};
