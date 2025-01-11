import { useForm } from "react-hook-form";
import { Place } from "./Places";
import { useEffect, useState } from "react";
import DUMMY_PLACES from "../../shared/components/DummpyPlaces";
import { useNavigate, useParams } from "react-router-dom";
const UpdatePage = () => {
	const { pid } = useParams();
	useEffect(() => {
		fetchData();
	});
	const fetchData = () => {
		return DUMMY_PLACES;
	};
	const navigate = useNavigate();
	const filteredPlace = fetchData().find((place) => place.id === pid);
	const [place, setPlace] = useState({
		id: filteredPlace?.id,
		title: filteredPlace?.title,
		description: filteredPlace?.description,
	});
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Place>();
	return (
		<form
			onSubmit={handleSubmit(() => {
				navigate("/u1/places", { state: { place } });
			})}
			className="card p-3 w-50 m-auto mt-5"
		>
			<div className="card-header text-center">
				<h3>Update Place</h3>
			</div>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">
					Title
				</label>
				<input
					{...register("title", { required: "Field Required" })}
					type="text"
					name="title"
					id="title"
					className="form-control"
					value={place.title}
					onChange={(e) => setPlace({ ...place, title: e.target.value })}
				/>
				{errors.title && (
					<span className="text-danger">{errors.title.message}</span>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<textarea
					{...register("description", {
						required: "Field Required",
						minLength: {
							value: 20,
							message: "Description Must be above 20 words",
						},
					})}
					name="description"
					id="description"
					className="form-control"
					placeholder="The description"
					value={place.description}
					onChange={(e) => setPlace({ ...place, description: e.target.value })}
				></textarea>
				{errors.description && (
					<span className="text-danger">{errors.description.message}</span>
				)}
			</div>
			<div className="mb-3 d-flex justify-content-center">
				<button
					type="submit"
					className="btn btn-primary mx-4"
					disabled={!isValid}
				>
					Update Place
				</button>
			</div>
		</form>
	);
};

export default UpdatePage;
