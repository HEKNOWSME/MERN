import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../Pages/Layout";
import Customer from "../Pages/Customer";
import Rental from "../Pages/Rental";
import Home from "../Pages/Home";
import Movie from "../Pages/Movie";

const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/customers", element: <Customer /> },
			{ path: "/rentals", element: <Rental /> },
			{ path: "/movies/:id/:name", element: <Movie /> },
		],
	},
	{ path: "/movies", element: <App /> },
]);
export default router;
