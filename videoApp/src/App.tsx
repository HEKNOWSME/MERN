import AllTable from "./components/Movies/AllMovies";
import movies from "./services/fakeMovieService";
const App = () => {
	return (
		<div className="grid">
			<aside className="side-bar">box side</aside>
			<nav className="nav-bar">box nav</nav>
			<main className="main">
				<AllTable items={movies} />
			</main>
			<footer className="footer">Footer</footer>
		</div>
	);
};

export default App;
