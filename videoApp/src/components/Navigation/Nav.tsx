import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav">
			<ul className="d-flex gap-3">
				<li className="list-unstyled">
					<NavLink to="/movies" className="nav-link">
						Movies
					</NavLink>
				</li>
				<li className="list-unstyled">
					<NavLink to="/customers" className="nav-link">
						Customers
					</NavLink>
				</li>
				<li className="list-unstyled">
					<NavLink to="/rentals" className="nav-link">
						Rentals
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
