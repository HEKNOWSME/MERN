import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
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
	const [selected, setSelect] = useState({
		category: "",
		status: "",
		searched: "",
	});

	const [update, setUpdate] = useState(false);
	const handleAdd = () => {
		if (task.task) {
			setTasks([...tasks, task]);
			setTask({ ...task, task: "", id: task.id + 1 });
		}
	};
	const handleDelete = (task: Task) => {
		setTasks(tasks.filter((t) => t.id !== task.id));
	};
	const handleComplete = (task: Task) => {
		if (task.status === "Active")
			setTasks(
				tasks.map((t) => (t.id === task.id ? { ...t, status: "Completed" } : t))
			);
		else
			setTasks(
				tasks.map((t) => (t.id === task.id ? { ...t, status: "Active" } : t))
			);
	};
	const handleEdit = (task: Task) => {
		setUpdate(!update);
		setTask(task);
	};
	const filteredTasks = tasks.filter((tas) => {
		const selectedCategory =
			!selected.category || selected.category === tas.category;
		const selectedStatus = !selected.status || selected.status === tas.status;
		const searchedTask = tas.task
			.toLowerCase()
			.includes(selected.searched.toLowerCase());
		return selectedCategory && selectedStatus && searchedTask;
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
				<Input
					onType={(e) => {
						setSelect({ ...selected, searched: e.toLowerCase() });
					}}
					type="search"
				/>
			</div>
			<hr />
			<div className="mx-2 position-relative">
				{update && (
					<div className="position-absolute z-1 top-50 start-50 translate-middle">
						<EditTask task={task} />
					</div>
				)}

				<div className="z-0">
					<TaskList
						tasks={filteredTasks}
						onDelete={handleDelete}
						onComplete={handleComplete}
						onEdit={handleEdit}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
