import { Expense } from "./Expense";
interface Props {
	expenses: Expense[];
	onEdit: (expense: Expense) => void;
	onDelete: (expense: Expense) => void;
}
const TableLists = ({ expenses, onDelete, onEdit }: Props) => {
	if (expenses.length === 0) {
		return (
			<p className="text-center text-secondary">No Expenses Available Now</p>
		);
	}
	return (
		<section>
			<h3 className="text-center">Table shows All Expenses</h3>
			<table className="table table-bordered table-striped">
				<thead className="table-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody className="table-secondary">
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<th scope="row">{expense.id}</th>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.category}</td>
							<td className="d-flex justify-content-around">
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={() => onEdit(expense)}
								>
									Edit
								</button>
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => onDelete(expense)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot className="table-dark">
					<tr>
						<th scope="row" colSpan={2}>
							Total Amount
						</th>
						<td colSpan={3}>
							${" "}
							{expenses
								.reduce((acc, expense) => acc + expense.amount, 0)
								.toFixed(2)}
						</td>
					</tr>
				</tfoot>
			</table>
		</section>
	);
};

export default TableLists;
