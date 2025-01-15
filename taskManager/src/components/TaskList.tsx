import { useState } from "react";
import { Task } from "../App";
import { LuTrash, LuPenLine, LuSquare, LuSquareCheck } from "react-icons/lu";
type Tasks = {
	tasks: Task[];
};
const TaskList = ({ tasks }: Tasks) => {
	const [completed] = useState(false);
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
					<tr>
						<th scope="row">{task.id}</th>
						<td>{task.task}</td>
						<td>{task.category}</td>
						<td>{task.status}</td>
						<td>{task.size}</td>
						<td className="d-flex gap-1 ">
							<i>
								{completed ? (
									<LuSquareCheck size={20} />
								) : (
									<LuSquare size={20} />
								)}
							</i>
							<i>
								<LuPenLine size={20} color="blue" />
							</i>
							<i>
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
