import { LuMenu } from "react-icons/lu";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<header
			className={`bg-primary text-light p-2 navigation ${toggle && "toggle"}`}
		>
			<div className="d-flex gap-2 menu">
				<i className="hamburger" onClick={() => setToggle(!toggle)}>
					<LuMenu size={30} />
				</i>
				<span>Claudistack</span>
			</div>
			<nav>
				<ul className="nav" onClick={() => setToggle(false)}>
					<li>
						<NavLink to="/users" className="nav-link text-light">
							All Users
						</NavLink>
					</li>
					<li>
						<NavLink to="/users/id/places" className="nav-link text-light">
							My Places
						</NavLink>
					</li>
					<li>
						<NavLink to="/places/new" className="nav-link text-light">
							Add Place
						</NavLink>
					</li>
					<li>
						<NavLink to="/auth" className="nav-link text-light">
							Add Place
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
