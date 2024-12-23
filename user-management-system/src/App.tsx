import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/MainSide/Main";

const App = () => {
	const [searchItem, setSearch] = useState("");
	const [toggled, setToggled] = useState(false);
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
			<SideBar isToggled={toggled} />
			<Main isToggled={ toggled} />
		</div>
	);
};

export default App;
