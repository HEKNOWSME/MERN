import { useState } from "react";
import { PlacesList } from "../components/PlacesList";
import { useLocation, useParams } from "react-router-dom";
import DUMMY_PLACES from "../../shared/components/DummpyPlaces";
type Location = {
	longitude: string;
	latitude: string;
};
export interface Place {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	address: string;
	location: Location;
	creator: string;
}
const Places = () => {
	const [places, setPlaces] = useState<Place[]>(DUMMY_PLACES);
	const { userid } = useParams();
	const location = useLocation();
	const { place } = location.state || {};
	let filteredPlaces = places.filter((pl) => pl.creator === userid);
	if (place) {
		filteredPlaces = filteredPlaces.map((p) =>
			p.id === place.id
				? { ...p, description: place.description, title: place.title }
				: p
		);
	}
	const handleDelete = (place: Place) => {
		setPlaces(places.filter((p) => p.id !== place.id));
	};
	return (
		<div className="p-2">
			<PlacesList places={filteredPlaces} onDelete={handleDelete} />
		</div>
	);
};

export default Places;
