import { LuMenu } from "react-icons/lu";
import "./nav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
	const [toggle, setToggle] = useState(false);
	const { pathname } = useLocation();

	return (
		<header
			className={`bg-secondary text-light p-2 navigation ${
				toggle && "toggle"
			} position-sticky top-0 start-0 end-0 z-1`}
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
							to={`places/newPlace`}
							className={({ isActive }: { isActive: boolean }) =>
								`nav-link ${
									isActive ? "bg-primary card text-light" : "text-light"
								}`
							}
						>
							Add Place
						</NavLink>
					</li>
					{pathname !== "/auth" && (
						<li>
							<NavLink
								to="/auth"
								className={({ isActive }: { isActive: boolean }) =>
									`nav-link ${
										isActive ? "bg-primary card text-light" : "text-light"
									}`
								}
							>
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
