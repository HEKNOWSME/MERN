import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
	const [searchItem, setSearch] = useState("");
	return (
		<div className="">
			<Navigation
				onSearch={(data) => {
					setSearch(data.toLowerCase());
					console.log(searchItem);
				}}
			/>
		</div>
	);
};

export default App;
