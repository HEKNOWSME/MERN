export interface Transaction {
	id: number;
	type: "income" | "expense";
	amount: number;
	description: string;
	category: string;
	account: "Cash" | "Bank" | "Mobile Money";
	date: string;
	subCategory: string;
}
type Props = {
	transactions: Transaction[];
	onDelete: (transaction: Transaction) => void;
};
const Transactions = ({ transactions, onDelete }: Props) => {
	if (transactions.length === 0)
		return (
			<div>
				<h3 className="text-center">No Transaction Here</h3>
			</div>
		);
	return (
		<div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Description</th>
						<th scope="col">Category</th>
						<th scope="col">Account</th>
						<th scope="col">Amount</th>
						<th scope="col">Type</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody className="tab-content">
					{transactions.length === 0 && (
						<h3 className="text-center">No Transaction Remains</h3>
					)}
					{transactions.map((transaction, index) => (
						<tr key={index}>
							<td scope="row">{transaction.date}</td>
							<td scope="row">{transaction.description}</td>
							<td scope="row">{transaction.category}</td>
							<td scope="row">{transaction.account}</td>
							<td scope="row">{transaction.amount}</td>
							<td scope="row">{transaction.type}</td>
							<td scope="row" className="d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => onDelete(transaction)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
