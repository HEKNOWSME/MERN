import { useForm } from "react-hook-form";
import { Place } from "./Places";
import { useState } from "react";
import DUMMY_PLACES from "../../shared/components/DummpyPlaces";
import { useParams } from "react-router-dom";
const UpdatePage = () => {
	const [place, setPlace] = useState({ title: "", description: "" });
	const { pid } = useParams();
	const filteredPlace = DUMMY_PLACES.find((place) => place.id === pid);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Place>();
	return (
		<form
			onSubmit={handleSubmit((data) => console.log(data))}
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
					value={filteredPlace?.title}
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
					value={filteredPlace?.description}
					onChange={(e) => setPlace({ ...place, description: e.target.value })}
				></textarea>
				{errors.description && (
					<span className="text-danger">{errors.description.message}</span>
				)}
			</div>
			<div className="mb-3 d-flex justify-content-between">
				<button type="submit" className="btn btn-primary mx-4">
					Update Place
				</button>
				<button type="reset" className="btn btn-secondary mx-4">
					Cancel
				</button>
			</div>
		</form>
	);
};

export default UpdatePage;
