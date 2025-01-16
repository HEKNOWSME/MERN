import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
export interface Task {
	id: number;
	task: string;
	size: string;
	category: string;
	status: "Completed" | "Active";
}
const App = () => {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			task: "Task 1",
			category: "Health",
			size: "High",
			status: "Active",
		},
		{
			id: 2,
			task: "Task 1",
			category: "Health",
			size: "High",
			status: "Active",
		},
	]);
	const [task, setTask] = useState<Task>({
		id: tasks.length + 1,
		task: "",
		category: "Work",
		size: "Low",
		status: "Active",
	});
	const [selected, setSelect] = useState({ category: "", status: "" });
	const handleAdd = () => {
		if (task.task) {
			setTasks([...tasks, task]);
			setTask({ ...task, task: "" });
		}
	};
	const filteredTasks = tasks.filter((tas) => {
		const selectedCategory =
			!selected.category || selected.category === tas.category;
		const selectedStatus = !selected.status || selected.status === tas.status;
		return selectedCategory && selectedStatus;
	});
	return (
		<div className="card m-1">
			<p className="fw-bolder text-center card-header">Task Manger</p>
			<div className="d-flex align-items-center card-body gap-2">
				<Input
					type="text"
					id="new_task"
					placeholder="Add new Task"
					onType={(input) => setTask({ ...task, task: input })}
					value={task.task}
				/>
				<Input
					select="category"
					type="select"
					id="category"
					onType={(input) => setTask({ ...task, category: input })}
				/>
				<Input
					type="select"
					select="size"
					onType={(input) => setTask({ ...task, size: input })}
				/>
				<Input
					type="button"
					title="Add task"
					color="secondary"
					onType={() => {}}
					onAdd={handleAdd}
				/>
			</div>
			<div className="d-flex gap-2 mx-3">
				<Input
					onType={(e) => setSelect({ ...selected, status: e })}
					type="select"
					select="status"
				/>
				<Input
					onType={(e) => setSelect({ ...selected, category: e })}
					type="select"
					select="filterCategory"
				/>
			</div>
			<hr />
			<div className="mx-2">
				<TaskList tasks={filteredTasks} />
			</div>
		</div>
	);
};

export default App;
