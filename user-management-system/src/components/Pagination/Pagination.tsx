import { User } from "../Users/Users";
import _ from "lodash";
interface Props {
	items: User[];
	pageSize?: number;
	OnPage: (page: number) => void;
	currentPage: number;
}
const Pagination = ({ items, pageSize = 5, OnPage }: Props) => {
	const pageCount = Math.ceil(items.length / pageSize);
	const pages = _.range(1, pageCount);
	return (
		<div>
			<nav>
				<ul className="pagination">
					{pages.map((page) => (
						<li
							className="page-item mx-1"
							key={page}
							onClick={() => OnPage(page)}
						>
							<a className="page-link">{page}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
