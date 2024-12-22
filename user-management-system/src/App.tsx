import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
	const [searchItem, setSearch] = useState("");
	return (
		<div className="grid">
			<Navigation
				onSearch={(data) => {
					setSearch(data.toLowerCase());
					console.log(searchItem);
				}}

			/>
			<SideBar/>
			<div className="three">
				<h1>Main</h1>
			</div>
		</div>
	);
};

export default App;
