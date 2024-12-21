interface Props {
	onSearch: (event: string) => void;
}
const Search = ({ onSearch }: Props) => {
	return (
		<input
			type="search"
			placeholder="Search Item ..."
			className="form-control border-primary mx-2"
			onChange={(event) => onSearch(event.target.value)}
		/>
	);
};

export default Search;
