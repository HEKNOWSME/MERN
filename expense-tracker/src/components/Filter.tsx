import { ChangeEvent } from "react";

interface Props {
	onSelect: (event: string) => void;
}
const Filter = ({ onSelect }: Props) => {
	return (
		<select
			name="categories"
			aria-label="categories"
			className="form-select w-25 border-primary"
			onChange={(event) => onSelect(event.target.value)}
		>
			<option value="">All Categories</option>
			<option value="Utilities">Utilities</option>
			<option value="Entertainment">Entertainment</option>
			<option value="Food">Food</option>
		</select>
	);
};

export default Filter;
