import { LuMenu } from "react-icons/lu";
import "./nav.css";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
	const [toggle, setToggle] = useState(false);
	const { userid } = useParams();

	return (
		<header
			className={`bg-secondary text-light p-2 navigation ${toggle && "toggle"}`}
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
						<NavLink
							to="/users"
							className={({ isActive }: { isActive: boolean }) =>
								`nav-link ${
									isActive ? "bg-primary card text-light" : "text-light"
								}`
							}
						>
							All Users
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/u1/places"
							className={({ isActive }: { isActive: boolean }) =>
								`nav-link ${
									isActive ? "bg-primary card text-light" : "text-light"
								}`
							}
						>
							My Places
						</NavLink>
					</li>
					<li>
						<NavLink
							to={`/${userid}/newPlace`}
							className={({ isActive }: { isActive: boolean }) =>
								`nav-link ${
									isActive ? "bg-primary card text-light" : "text-light"
								}`
							}
						>
							Add Place
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/auth"
							className={({ isActive }: { isActive: boolean }) =>
								`nav-link ${
									isActive ? "bg-primary card text-light" : "text-light"
								}`
							}
						>
							Auth
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
