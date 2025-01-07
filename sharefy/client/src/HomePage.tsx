import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<h3>Home Page</h3>
			<Link to="/users">Find Users</Link>
		</div>
	);
};

export default HomePage;
