import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
export interface Task {
	id: number;
	task: string;
	size: "Low" | "Medium" | "High";
	category: "Work" | "Personal" | "Shopping" | "Health";
	status: "Completed" | "Active";
}
const App = () => {
	const [tasks] = useState<Task[]>([
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
	const handleType = (input: string) => console.log(input);
	const handleAdd = (key: string) => {
		if (key === "Enter") console.log("Added to the list");
	};
	return (
		<div className="card m-1">
			<p className="fw-bolder text-center card-header">Task Manger</p>
			<div className="d-flex align-items-center card-body gap-2">
				<Input
					type="text"
					id="new_task"
					placeholder="Add new Task"
					onType={handleType}
					onEnter={handleAdd}
				/>
				<Input
					select="category"
					type="select"
					id="category"
					onType={handleType}
					onEnter={(key) => {
						console.log(key);
					}}
				/>
				<Input
					type="select"
					select="size"
					onType={handleType}
					onEnter={(key) => {
						console.log(key);
					}}
				/>
				<Input
					type="button"
					title="Add task"
					color="secondary"
					onType={handleType}
					onEnter={(key) => {
						console.log(key);
					}}
					onAdd={() => console.log("Added")}
				/>
			</div>
			<div className="d-flex gap-2 mx-3">
				<Input
					onType={handleType}
					type="select"
					select="status"
					onEnter={(key) => {
						console.log(key);
					}}
				/>
				<Input
					onType={handleType}
					type="select"
					select="filterCategory"
					onEnter={(key) => {
						console.log(key);
					}}
				/>
			</div>
			<hr />
			<div className="mx-2">
				<TaskList tasks={tasks} />
			</div>
		</div>
	);
};

export default App;
