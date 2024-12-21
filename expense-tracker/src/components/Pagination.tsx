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
	const [currentPage, setCurrentPage] = useState(1);
	let originalExpenses = [...items];

	//setting Pagination
	const itemsPerPage = 5;
	const totalPages = Math.ceil(originalExpenses.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	originalExpenses = originalExpenses.slice(startIndex, endIndex);
	const nextPage = () =>
		currentPage < totalPages && setCurrentPage((curr) => curr + 1);
	const prevPage = () => currentPage > 1 && setCurrentPage((curr) => curr - 1);
	return (
		<div className="pagination d-flex justify-content-center">
			<button
				type="button"
				className="btn btn-outline-primary"
				onClick={prevPage}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			<button
				type="button"
				className="btn btn-outline-primary mx-3"
				onClick={nextPage}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
