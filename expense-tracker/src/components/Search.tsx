import { ChangeEvent, FormEvent } from "react";

interface Props {
	onSearch: (event: string) => void;
}
const Search = ({ onSearch }: Props) => {
	return (
		<input
			type="search"
			placeholder="Search Item ..."
			className="form-control w-50 border-1 border-primary"
			onChange={(event) => onSearch(event.target.value)}
		/>
	);
};

export default Search;
