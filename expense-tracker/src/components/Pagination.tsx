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
	// pagination
	const numberOfExpenses = 5;
	const numberOfPages = Math.ceil(items.length / numberOfExpenses);
	const startIndex = (currentPage - 1) * numberOfExpenses;
	const endIndex = startIndex + numberOfExpenses;
	items = items.slice(startIndex, endIndex);
	const handlePageChange = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= numberOfPages) {
			setPage(pageNumber);
		}
	};

	return (
		<div className="mb3 d-flex justify-content-center">
			<button
				type="button"
				className="btn btn-outline-primary"
				disabled={currentPage === 1}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				Prev
			</button>
			<button
				type="button"
				className="btn btn-outline-primary mx-5"
				onClick={() => handlePageChange(currentPage + 1)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
