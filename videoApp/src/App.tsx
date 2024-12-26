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
	const filteredMovies = allMovies.filter((movie) => {
		const matchedCategory = !selected || movie.genre.name === selected;
		return matchedCategory;
	});
	const handleDelete = (id: string) => {
		setMovies(allMovies.filter((movie) => movie._id !== id));
		setMessage({ ...messages, deleted: true });
		setTimeout(() => {
			setMessage({ ...messages, deleted: false });
		}, 2000);
	};
	const itemsPerPage = 5;
	const pages = Math.ceil(filteredMovies.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	const currentMovies = filteredMovies.slice(startIndex, endIndex);

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
					<span className="alert alert-primary">Successful deleted</span>
				)}
				<div className="movies">
					<h4 className="text-center">
						Showing {allMovies.length} Movies in The database
					</h4>
					<AllTable
						items={currentMovies.sort((a, b) => a.title.localeCompare(b.title))}
						onDelete={handleDelete}
					/>
					<div className="pagination d-flex gap-5">
						<span>
							{currentPage} Of {pages}
						</span>
						<div className="d-flex gap-3">
							<button
								type="button"
								className="btn btn-primary"
								onClick={prevPage}
								disabled={currentPage == 1 || filteredMovies.length == 0}
							>
								Prev
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={nextPage}
								disabled={currentPage == pages || filteredMovies.length == 0}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
