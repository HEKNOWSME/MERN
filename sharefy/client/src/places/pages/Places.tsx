import { useState } from "react";
import { PlacesList } from "../components/PlacesList";
import { useParams } from "react-router-dom";
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
	const [places] = useState<Place[]>([
		{
			title: "Empire State Building",
			id: "p1",
			address: "20 W 34th St., New York, NY 10001, United States",
			description: "One of the most famous sky scrapper in the world",
			imageUrl:
				"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTrezj-EjFrSWCIy5zai3bGljtoRrmHXbTtAJfpS7T5awhDsET3ziTAhO8f5d72LtNIzeVXqoZbELj3ijK1PtLeFPBUGcQ5Hz3UlXvZqA",
			creator: "u1",
			location: { latitude: "40.7484405", longitude: "-73.9882393" },
		},
		{
			title: "Rwanda",
			id: "p3",
			address: "landlocked country in the Great Rift Valley of East Africa",
			description: "Rwanda, officially the Republic of Rwanda",
			imageUrl:
				"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR-xjFR-gJgCANgwA0RCFjL4GwKrYzthI9KwzfGfmaSNh6fDFlBHJN0mUGnt0OaNG3Wx8qrUoOiE17s5wrx5qedBLVAQNQMvG9BE9hz2w",
			creator: "u1",
			location: { latitude: "40.7484405", longitude: "-73.9882393" },
		},
		{
			title: "Empire State Building",
			id: "p2",
			address: "20 W 34th St., New York, NY 10001, United States",
			description: "One of the most famous sky scrapper in the world",
			imageUrl:
				"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTrezj-EjFrSWCIy5zai3bGljtoRrmHXbTtAJfpS7T5awhDsET3ziTAhO8f5d72LtNIzeVXqoZbELj3ijK1PtLeFPBUGcQ5Hz3UlXvZqA",
			creator: "u2",
			location: { latitude: "40.7484405", longitude: "-73.9882393" },
		},
	]);
	const { userid } = useParams();
	const filteredPlaces = places.filter((place) => place.creator === userid);
	return (
		<div className="p-2">
			<PlacesList places={filteredPlaces} />
		</div>
	);
};

export default Places;
