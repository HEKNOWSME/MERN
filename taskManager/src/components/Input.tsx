import { categories, size, status } from "./Share";
interface Props {
	type: "text" | "password" | "email" | "select" | "button";
	color?:
		| "primary"
		| "secondary"
		| "danger"
		| "outline-primary"
		| "outline-secondary";
	placeholder?: string;
	id?: string;
	title?: string;
	select?: "category" | "size" | "status" | "filterCategory";
	onType: (input: string) => void;
	onAdd?: () => void;
	onEnter: (key: string) => void;
}
const Input = ({
	type,
	placeholder,
	id,
	onType,
	select,
	title,
	color,
	onAdd,
	onEnter,
}: Props) => {
	switch (type) {
		case "select":
			return (
				<div>
					<label htmlFor={id} className="form-label d-none">
						{title}
					</label>
					{select === "category" && (
						<select
							name={select}
							id={id}
							className="form-select placeholder-wave"
							onChange={(e) => {
								onType(e.target.value);
							}}
						>
							{categories.map((cat) => (
								<option value={cat} key={cat}>
									{cat}
								</option>
							))}
						</select>
					)}
					{select === "size" && (
						<select
							name={select}
							id={id}
							className="form-select placeholder-wave"
							onChange={(e) => onType(e.target.value)}
						>
							{size.map((stat) => (
								<option value={stat} key={stat}>
									{stat}
								</option>
							))}
						</select>
					)}
					{select === "status" && (
						<select
							className="form-select placeholder-wave"
							aria-label="status"
							onChange={(e) => {
								onType(e.target.value);
							}}
						>
							<option value="">All Status</option>
							{status.map((st) => (
								<option value={st} key={st}>
									{st}
								</option>
							))}
						</select>
					)}
					{select === "filterCategory" && (
						<select
							name={select}
							id={id}
							className="form-select placeholder-wave"
							onChange={(e) => {
								onType(e.target.value);
							}}
						>
							<option value="">All Categories</option>
							{categories.map((cat) => (
								<option value={cat} key={cat}>
									{cat}
								</option>
							))}
						</select>
					)}
				</div>
			);
		case "button":
			return (
				<button type="button" className={`btn btn-${color}`} onClick={onAdd}>
					{title}
				</button>
			);
		default:
			return (
				<div>
					<input
						type={type}
						id={id}
						className="form-control placeholder-wave"
						placeholder={placeholder}
						onKeyUp={(e) => onEnter(e.key)}
						onChange={(e) => onType(e.target.value)}
					/>
				</div>
			);
	}
};

export default Input;
