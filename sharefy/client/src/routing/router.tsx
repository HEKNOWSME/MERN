import { createBrowserRouter } from "react-router-dom";
import Users from "../users/pages/Users";
import Places from "../places/pages/Places";
import { Layout } from "../shared/components/Layout";

import HomePage from "../HomePage";
import Error from "./ErrorPage";
import NewPlace from "../places/pages/NewPlace";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/users", element: <Users /> },
			{ path: "/places", element: <Places /> },
			{ path: "/:userid/places", element: <Places /> },
			{ path: "/:userid/newPlace", element: <NewPlace /> },
		],
	},
]);
export default router;
