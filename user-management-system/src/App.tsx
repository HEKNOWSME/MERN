import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/MainSide/Main";
import GetUsers, { User } from "./components/Users/Users";
import Users from "./components/Users/GetUsers";
import AddUsers from "./components/Users/AddUsers";
import EditUser from "./components/Users/EditUser";

const App = () => {
	const [toggle, setToggle] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [searchItem, setSearch] = useState("");
	const [currentPage, setPage] = useState(1);
	const [App, setApp] = useState({
		dashBoard: true,
		user: false,
		add: false,
		editMode: false,
		message: false,
	});
	const [allUsers, setUsers] = useState(Users());
	const [user, setUser] = useState<User>({
		id: 0,
		username: "",
		amount: 0,
		email: "",
		status: "",
	});

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

	const handleAdd = (user: User) => {
		setUsers([...allUsers, { ...user, id: allUsers.length + 1 }]);
		setApp({ ...App, editMode: false, add: false, message: true });
		setTimeout(() => {
			setApp({ ...App, message: false, add: false, editMode: false });
		}, 2000);
	};
	const handleDelete = (user: User) => {
		setUsers(allUsers.filter((u) => u.id !== user.id));
	};

	const handleEdit = (user: User) => {
		setApp({ ...App, editMode: true, add: false });
		setUser({
			id: user.id,
			username: user.username,
			amount: user.amount,
			email: user.email,
			status: user.status,
		});
	};
	const handleEditSubmit = (data: User) => {
		setUsers(
			allUsers.map((u) =>
				u.id === user.id
					? {
							id: user.id,
							username: data.username,
							email: data.email,
							amount: data.amount,
							status: data.status,
					  }
					: u
			)
		);
		setApp({ ...App, editMode: false });
	};
	return (
		<div className={`grid ${toggle && "toggle"}`}>
			<div className="nav">
				<Navigation
					toUser={disabled}
					onSearch={(data) => {
						setSearch(data.toLowerCase());
						setApp({ ...App, add: false });
					}}
					onToggle={() => {
						setToggle(!toggle);
					}}
				/>
			</div>
			<aside className="sidebar">
				<SideBar
					isToggled={toggle}
					onClick={(str) => {
						if (str === "Dashboard") {
							setApp({
								...App,
								user: false,
								dashBoard: true,
							});
							setDisabled(false);
						} else {
							setApp({ ...App, user: true, dashBoard: false });
							setDisabled(true);
						}
					}}
				/>
			</aside>
			<main className={`main ${toggle && "toggle"}`}>
				{App.dashBoard && <Main isToggled={toggle} users={allUsers} />}

				{App.user && (
					<div className={toggle ? "toggled" : "users"}>
						<div className="d-flex justify-content-end">
							<button
								type="button"
								className="btn btn-primary mb-3"
								onClick={() =>
									setApp({ ...App, add: !App.add, editMode: false })
								}
							>
								Add User
							</button>
						</div>
						{App.add && (
							<div className={`AddUsers ${toggle && "cards"}`}>
								<div className="d-flex justify-content-end">
									<button
										type="button"
										className="btn-close mx-2 bg-white"
										aria-label="btn-close"
										onClick={() => setApp({ ...App, add: false })}
									></button>
								</div>
								<AddUsers onAdd={handleAdd} />
							</div>
						)}
						{App.editMode && (
							<div className={`AddUsers ${toggle && "cards"}`}>
								<div className="d-flex justify-content-end">
									<button
										type="button"
										className="btn-close mx-2 bg-white"
										aria-label="btn-close"
										onClick={() => setApp({ ...App, editMode: false })}
									></button>
								</div>
								<EditUser
									username={user.username}
									amount={user.amount}
									email={user.email}
									status={user.status}
									onSubmit={(data) => {
										handleEditSubmit(data);
										setApp({ ...App, message: true, editMode: false });
										setTimeout(() => {
											setApp({ ...App, message: false, editMode: false });
										}, 2000);
									}}
								/>
							</div>
						)}
						<GetUsers
							users={filtered}
							toggled={!toggle}
							onDelete={handleDelete}
							onEdit={handleEdit}
						/>
						{allUsers.length == 0 && (
							<h2 className="message text-center text-secondary">
								No User Available
							</h2>
						)}
						<div
							className={`flex ${allUsers.length == 0 && "visually-hidden"}`}
						>
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
						<div className="d-flex justify-content-end">
							{App.message && (
								<div className="alert alert-primary w-25 d-flex justify-content-between">
									<span>Successful Added</span>
									<button
										type="button"
										className="btn btn-close"
										aria-label="btn"
										onClick={() => setApp({ ...App, message: false })}
									></button>
								</div>
							)}
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default App;
