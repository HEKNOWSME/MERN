import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<div id="main">
				<Outlet />
			</div>
		</>
	);
};
