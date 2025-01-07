import { createBrowserRouter } from "react-router-dom";
import Users from "../users/pages/Users";
import Places from "../places/pages/Places";
import { Layout } from "./Layout";

import HomePage from "../HomePage";
import Error from "./ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/users", element: <Users /> },
			{ path: "/places", element: <Places /> },
		],
	},
]);
export default router;
