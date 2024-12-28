import { status } from "./Status";
interface Props {
	onChange: (e: string) => void;
}
function Filter({ onChange }: Props) {
	return (
		<select
			name="status"
			aria-label="status"
			className="form-select"
			onChange={(e) => onChange(e.target.value)}
		>
			<option value="">All Items</option>
			{status.map((stat) => (
				<option value={stat} key={stat}>
					{stat}
				</option>
			))}
		</select>
	);
}

export default Filter;
