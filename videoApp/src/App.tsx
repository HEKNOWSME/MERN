import { useState } from "react";
import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
const App = () => {
	const [allMovies, setMovies] = useState(movies);
	let filteredMovies = allMovies.filter((movie) => movie);
	const handleDelete = (id: string) => {
		filteredMovies = filteredMovies.filter((movie) => movie._id !== id);
		setMovies(filteredMovies);
	};
	return (
		<div className="grid">
			<aside className="side-bar">box side</aside>
			<nav className="nav-bar">box nav</nav>
			<main className="main">
				<AllTable items={filteredMovies} onDelete={handleDelete} />
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
