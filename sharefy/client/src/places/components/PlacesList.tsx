import { Link } from "react-router-dom";
import { Place } from "../pages/Places";
import "./places.css";
export const PlacesList = ({ places }: { places: Place[] }) => {
	if (places.length === 0)
		return (
			<div className="card text-center p-3 fw-bolder">No Place Available</div>
		);
	return (
		<section className="places mt-1">
			{places.map((place) => (
				<article className="card" key={place.id}>
					<img
						src={place.imageUrl}
						className="card-image"
						alt={place.address}
					/>
					<div className="card-body">
						<span> {place.title}</span>
						<span> {place.address}</span>
						<span> {place.description}</span>
					</div>
					<div className="card-footer d-flex gap-2 justify-content-center">
						<button type="button" className="btn btn-outline-primary">
							View On Map
						</button>
						<button type="button" className="btn btn-outline-secondary">
							<Link to={`/places/${place.id}`} className="nav-link">
								Edit
							</Link>
						</button>
						<button type="button" className="btn btn-outline-danger">
							Delete
						</button>
					</div>
				</article>
			))}
		</section>
	);
};
