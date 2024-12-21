interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}
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
			<table className="table table-bordered table-striped-columns">
				<thead className="table-active">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<th scope="row" className="table-info">
								{expense.id}
							</th>
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
				<tfoot>
					<tr className="table-primary">
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
