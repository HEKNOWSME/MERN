import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/MainSide/Main";
import Settings from "./components/MySettings/Settings";
import GetUsers from "./components/Users/Users";
import Users from "./components/Users/GetUsers";

const App = () => {
	const [toggle, setToggle] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [searchItem, setSearch] = useState("");
	const [currentPage, setPage] = useState(1);
	const [App, setApp] = useState({
		dashBoard: true,
		user: false,
		settings: false,
	});
	const [allUsers] = useState(Users());
	let filtered = allUsers.filter(
		(user) =>
			user.username.toLowerCase().includes(searchItem) ||
			user.email.toLowerCase().includes(searchItem)
	);
	if (filtered.length === 0) filtered = [];

	const usersPerPage = 5;
	const numberOfPages = Math.ceil(filtered.length / usersPerPage);
	const startUser = (currentPage - 1) * usersPerPage;
	const endUser = startUser + usersPerPage;
	filtered = filtered.slice(startUser, endUser);

	const nextPage = () =>
		currentPage < numberOfPages && setPage(currentPage + 1);

	const prevPage = () => currentPage > 1 && setPage(currentPage - 1);

	return (
		<div className="grid">
			<Navigation
				toUser={disabled}
				onSearch={(data) => {
					setSearch(data.toLowerCase());
				}}
				onToggle={() => {
					setToggle(!toggle);
				}}
			/>
			<SideBar
				isToggled={toggle}
				onClick={(str) => {
					if (str === "Dashboard") {
						setApp({
							user: false,
							settings: false,
							dashBoard: true,
						});
						setDisabled(false);
					}
					if (str === "Users") {
						setApp({ user: true, dashBoard: false, settings: false });
						setDisabled(true);
					}
					if (str === "Settings") {
						setApp({ settings: true, dashBoard: false, user: false });
						setDisabled(false);
					}
				}}
			/>
			{App.dashBoard && <Main isToggled={toggle} users={allUsers} />}

			{App.user && (
				<div className={toggle ? "toggled" : "users"}>
					<div className="d-flex justify-content-end">
						<button type="button" className="btn btn-primary mb-3">
							Add User
						</button>
					</div>
					<GetUsers users={filtered} toggled={!toggle} />
					<div className={`flex ${filtered.length == 0 && "visually-hidden"}`}>
						<button
							type="button"
							className="btn btn-primary"
							onClick={prevPage}
							disabled={currentPage == 1}
						>
							Prev
						</button>
						<button
							type="button"
							className="btn btn-primary mx-4"
							onClick={nextPage}
							disabled={currentPage == numberOfPages}
						>
							Next
						</button>
					</div>
				</div>
			)}
			{App.settings && <Settings />}
		</div>
	);
};

export default App;
