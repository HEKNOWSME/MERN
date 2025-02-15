import { useState } from "react";
import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
import Genres from "./components/Genres/Genres";
import Pagination from "./components/Pagination/Pagination";
import { paginate } from "./components/Pagination/Paginate";
import { useNavigate } from "react-router-dom";
const App = () => {
	const [allMovies, setMovies] = useState(movies);
	const [selected, setSelected] = useState("");
	const [currentPage, setPage] = useState(1);
	const [messages, setMessage] = useState({
		deleted: false,
		edited: false,
		added: false,
	});
	const navigate = useNavigate();
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
	const NewMovies = paginate(filtered, currentPage, 5);
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
			<nav className="d-flex justify-content-between nav-bar gap-3">
				<p>DashBoard Nav</p>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => navigate("/", { replace: true })}
				>
					Back
				</button>
			</nav>
			<main className="main">
				{messages.deleted && (
					<span className="alert alert-primary">Successful deleted</span>
				)}
				<div className="movies">
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
