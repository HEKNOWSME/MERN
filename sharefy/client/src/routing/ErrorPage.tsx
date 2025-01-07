import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	return (
		<div className="mt-3">
			<h1>!oops</h1>
			<p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}</p>
		</div>
	);
};
export default Error;
