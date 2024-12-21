import { useState } from "react";
interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}
interface Props {
	items: Expense[];
}
const Pagination = ({ items }: Props) => {
	const [currentPage, setPage] = useState(1);
	const numberOfExpenses = 5;
	const numberOfPages = Math.ceil(items.length / numberOfExpenses);
	const startIndex = (currentPage - 1) * numberOfExpenses;
	const endIndex = startIndex + numberOfExpenses;

	items = items.slice(startIndex, endIndex);
	const nextPage = () => {
		currentPage < numberOfPages && setPage((page) => page + 1);
	};
	const prevPage = () => {
		currentPage > 1 && setPage((page) => page - 1);
	};

	<div className="mb3 d-flex justify-content-between">
		<button
			type="button"
			className="btn btn-outline-primary"
			disabled={currentPage === 1}
			onClick={prevPage}
		>
			Prev
		</button>
		<button
			type="button"
			className="btn btn-outline-primary"
			onClick={nextPage}
			disabled={currentPage === numberOfPages}
		>
			Next
		</button>
	</div>;
};

export default Pagination;
