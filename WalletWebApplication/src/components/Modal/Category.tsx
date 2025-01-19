import { useForm } from "react-hook-form";
import "./Modal.css";
export type Category = {
	category: string;
	subCategory: string;
};
interface Props {
	onClose: () => void;
	onSubmit: (data: Category) => void;
}
const Categories = ({ onClose, onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Category>();
	return (
		<form
			className="showModal bg-body-tertiary card "
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<div className="d-flex justify-content-end">
				<span className="mt-0 fs-3 cursor" onClick={onClose}>
					&times;
				</span>
			</div>
			<div className="mb-1">
				<input
					{...register("category", {
						required: "Field required",
						maxLength: { value: 20, message: "Do not exceed 20 characters" },
					})}
					type="text"
					name="category"
					id="category"
					className="form-control placeholder-wave"
					placeholder="Add category"
				/>
				{errors.category && (
					<span className="text-danger">{errors.category.message}</span>
				)}
			</div>
			<div className="mb-3">
				<input
					{...register("subCategory", {
						required: "Field required",
						maxLength: { value: 20, message: "Do not exceed 20 characters" },
					})}
					type="text"
					name="subCategory"
					id="amount"
					className="form-control placeholder-wave"
					placeholder="Add subCategory"
				/>
				{errors.subCategory && (
					<span className="text-danger">{errors.subCategory.message}</span>
				)}
			</div>
			<button type="submit" className="btn btn-primary">
				Save Category{" "}
			</button>
		</form>
	);
};

export default Categories;
