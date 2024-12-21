import Categories from "./Categories";
interface Props {
	onSelect: (event: string) => void;
}
const Filter = ({ onSelect }: Props) => {
	return (
		<select
			name="categories"
			aria-label="categories"
			className="form-select border-primary mx-2"
			onChange={(event) => onSelect(event.target.value)}
		>
			<option value="">All Categories</option>
			{Categories.map((cat) => (
				<option key={cat} value={cat}>
					{cat}
				</option>
			))}
		</select>
	);
};

export default Filter;
