import { useParams } from "react-router-dom";

const Movie = () => {
   const { id, name } = useParams();
	return (
		<div className="text-light text-center">
			<h3>Movie with id: </h3>
			<p>{id}</p>
			<p>Movie name: {name}</p>
		</div>
	);
};

export default Movie;
