import { useState } from "react";
import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
import Genres from "./components/Genres/Genres";
const App = () => {
	const [allMovies, setMovies] = useState(movies);
	const [currentPage, setPage] = useState(1);
	const [selected, setSelected] = useState("");
	const [messages, setMessage] = useState({
		deleted: false,
		edited: false,
		added: false,
	});
	let filteredMovies = [...allMovies];
	filteredMovies = allMovies.filter((movie) => movie.genre.name == selected);
	if (filteredMovies.length === 0) filteredMovies = allMovies;

	const handleDelete = (id: string) => {
		filteredMovies = allMovies.filter((movie) => movie._id !== id);
		setMovies(filteredMovies);
		setMessage({ ...messages, deleted: true });
		setTimeout(() => {
			setMessage({ ...messages, deleted: false });
		}, 2000);
	};
	const itemsPerPage = 5;
	const pages = Math.ceil(filteredMovies.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	filteredMovies = filteredMovies.slice(startIndex, endIndex);

	const nextPage = () => {
		if (currentPage < pages) setPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage > 1) setPage(currentPage - 1);
	};
	return (
		<div className="grid">
			<aside className="side-bar">
				<Genres onFiltered={(name) => setSelected(name)} />
			</aside>
			<nav className="nav-bar">box nav</nav>
			<main className="main">
				{messages.deleted && (
					<span className="alert alert-primary">user deleted</span>
				)}
				<div className="movies">
					<AllTable
						items={filteredMovies.sort((a, b) =>
							a.title.localeCompare(b.title)
						)}
						onDelete={handleDelete}
					/>
					<div className="pagination">
						<button
							type="button"
							className="btn btn-primary"
							onClick={prevPage}
						>
							Prev
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={nextPage}
						>
							Next
						</button>
					</div>
				</div>
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
