import { useState } from "react";
import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
import Genres from "./components/Genres/Genres";
import Pagination from "./components/Pagination/Pagination";
import { paginate } from "./components/Pagination/Paginate";
const App = () => {
	const [allMovies, setMovies] = useState(movies);
	const [selected, setSelected] = useState("");
	const [currentPage, setPage] = useState(1);
	const [messages, setMessage] = useState({
		deleted: false,
		edited: false,
		added: false,
	});
	const handleDelete = (id: string) => {
		setMovies(allMovies.filter((movie) => movie._id !== id));
		setMessage({ ...messages, deleted: true });
		setTimeout(() => {
			setMessage({ ...messages, deleted: false });
		}, 2000);
	};
	const handleChange = (page: number) => {
		setPage(page);
	};
	const filtered = selected
		? allMovies.filter((movie) => movie.genre.name === selected)
		: allMovies;
	const NewMovies = paginate(filtered, currentPage, 4);
	return (
		<div className="grid">
			<aside className="side-bar">
				<Genres
					onFiltered={(name) => {
						setSelected(name);
						setPage(1);
					}}
				/>
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
						items={NewMovies.sort((a, b) => a.title.localeCompare(b.title))}
						onDelete={handleDelete}
					/>
					<Pagination
						items={filtered}
						itemsPerPage={5}
						currentPage={currentPage}
						onChangePage={handleChange}
					/>
				</div>
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
