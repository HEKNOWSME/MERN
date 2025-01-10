import { useState } from "react";
import { PlacesList } from "../components/PlacesList";
import { useParams } from "react-router-dom";
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
	const filteredPlaces = places.filter((place) => place.creator === userid);
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
