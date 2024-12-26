import { useState } from "react";
import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
const App = () => {
	const [allMovies, setMovies] = useState(movies);
	const [messages, setMessage] = useState({
		deleted: false,
		edited: false,
		added: false,
	});
	let filteredMovies = allMovies.filter((movie) => movie);
	const handleDelete = (id: string) => {
		filteredMovies = filteredMovies.filter((movie) => movie._id !== id);
		setMovies(filteredMovies);
		setMessage({ ...messages, deleted: true });
		setTimeout(() => {
			setMessage({ ...messages, deleted: false });
		}, 2000);
	};
	return (
		<div className="grid">
			<aside className="side-bar">box side</aside>
			<nav className="nav-bar">box nav</nav>
			<main className="main">
				{messages.deleted && (
					<span className="alert alert-primary">user deleted</span>
				)}
				<AllTable items={filteredMovies} onDelete={handleDelete} />
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
