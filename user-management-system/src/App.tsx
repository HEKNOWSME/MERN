import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/MainSide/Main";
import Users from "./components/Users/Users";
import Settings from "./components/MySettings/Settings";

const App = () => {
	const [searchItem, setSearch] = useState("");
	const [toggled, setToggled] = useState(false);
	const [App, setApp] = useState({
		dashBoard: true,
		users: false,
		settings: false,
	});
	return (
		<div className="grid">
			<Navigation
				onSearch={(data) => {
					setSearch(data.toLowerCase());
					console.log(searchItem);
				}}
				onToggle={() => {
					setToggled(!toggled);
				}}
			/>
			<SideBar
				isToggled={toggled}
				onClick={(str) => {
					if (str === "Dashboard") setApp({ ...App, dashBoard: true });
					if (str === "Users")
						setApp({ users: true, dashBoard: false, settings: false });
					if (str === "Settings")
						setApp({ settings: true, dashBoard: false, users: false });
				}}
			/>
			{App.dashBoard && <Main isToggled={toggled} />}
			{App.users && <Users/>}
			{App.settings && <Settings/>}
		</div>
	);
};

export default App;
