import { Task } from "../App";
import { LuTrash, LuPenLine, LuSquare, LuSquareCheck } from "react-icons/lu";
import "./Icon.css";
interface Tasks {
	tasks: Task[];
	onDelete: (task: Task) => void;
	onComplete: (task: Task) => void;
	onEdit: (task: Task) => void;
}
const TaskList = ({ tasks, onDelete, onComplete, onEdit }: Tasks) => {
	if (tasks.length === 0)
		return (
			<div>
				<h3 className="text-center">No task Remains</h3>
			</div>
		);
	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Task</th>
					<th scope="col">Category</th>
					<th scope="col">Status</th>
					<th scope="col">Size</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map((task) => (
					<tr key={task.id}>
						<th scope="row">{task.id}</th>
						<td>{task.task}</td>
						<td>{task.category}</td>
						<td>{task.status}</td>
						<td>{task.size}</td>
						<td className="d-flex gap-1 ">
							<i
								className="icon"
								onClick={() => {
									onComplete(task);
								}}
							>
								{task.status === "Completed" ? (
									<LuSquareCheck size={20} />
								) : (
									<LuSquare size={20} />
								)}
							</i>
							<i className="icon" onClick={() => onEdit(task)}>
								<LuPenLine size={20} color="blue" />
							</i>
							<i className="icon" onClick={() => onDelete(task)}>
								<LuTrash size={20} color="red" />
							</i>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TaskList;
