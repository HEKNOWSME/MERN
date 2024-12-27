import _ from "lodash";
import { Movie } from "../Movies/AllMovies";

interface Props {
	items: Movie[];
	itemsPerPage: number;
	currentPage: number;
	onChangePage: (page: number) => void;
}
const Pagination = ({
	items,
	itemsPerPage,
	onChangePage,
	currentPage,
}: Props) => {
	const pages = Math.ceil(items.length / itemsPerPage);
	const pageNumbers = _.range(1, pages + 1);
	return (
		<nav>
			<ul className="pagination gap-1">
				{pageNumbers.map((page) => (
					<li
						key={page}
						className={page === currentPage ? "page-item active" : "page-item"}
					>
						<a className="page-link" onClick={() => onChangePage(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
