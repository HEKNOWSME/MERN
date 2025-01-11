import { createBrowserRouter } from "react-router-dom";
import Users from "../users/pages/Users";
import Places from "../places/pages/Places";
import { Layout } from "../shared/components/Layout";

import HomePage from "../HomePage";
import Error from "./ErrorPage";
import NewPlace from "../places/pages/NewPlace";
import UpdatePage from "../places/pages/UpdatePage";
import AuthPage from "../shared/components/AuthPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/users", element: <Users /> },
			{ path: "/places", element: <Places /> },
			{ path: "/places/newPlace", element: <NewPlace /> },
			{ path: "/places/:pid", element: <UpdatePage /> },
			{ path: "/:userid/places", element: <Places /> },
			{ path: "/auth", element: <AuthPage /> },
		],
	},
]);
export default router;
