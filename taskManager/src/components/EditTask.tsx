import { Task } from "../App";
import { size, categories } from "./Share";

interface EditTask {
	task: Task;
}
const EditTask = ({ task }: EditTask) => {
	return (
		<form action="" className="card p-3">
			<h3>Update {task.task}</h3>
			<div className="mb-3">
				<label htmlFor="task" className="form-label">
					Task
				</label>
				<input
					type="text"
					name="task"
					id="task"
					className="form-control"
               value={task.task}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="size" className="form-label">
					Size
				</label>
				<select name="size" id="size" className="form-select" value={task.size}>
					<option value=""></option>
					{size.map((s) => (
						<option>{s}</option>
					))}
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="categories" className="form-label">
					Category
				</label>
				<select
					name="categories"
					id="categories"
					className="form-select"
					value={task.category}
				>
					<option value=""></option>
					{categories.map((s) => (
						<option>{s}</option>
					))}
				</select>
			</div>
			<button type="button" className="btn btn btn-primary">
				Update
			</button>
		</form>
	);
};

export default EditTask;
