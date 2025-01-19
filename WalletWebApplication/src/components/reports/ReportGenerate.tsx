import { Transaction } from "../transactions/Transactions";

type Props = {
	transactions: Transaction[];
	from: string;
	to: string;
};
const ReportsGenerate = ({ transactions, from, to }: Props) => {
	if (transactions.length === 0)
		return (
			<div>
				<h3 className="text-center">No Reports Here</h3>
			</div>
		);
	return (
		<div>
			<p className="fw-bolder text-center">
				Reports from {from} up to {to}
			</p>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Description</th>
						<th scope="col">Category</th>
						<th scope="col">Account</th>
						<th scope="col">Amount</th>
						<th scope="col">Type</th>
					</tr>
				</thead>
				<tbody className="tab-content">
					{transactions.length === 0 && (
						<h3 className="text-center">No Transaction Remains</h3>
					)}
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td scope="row">{transaction.date}</td>
							<td scope="row">{transaction.description}</td>
							<td scope="row">{transaction.category}</td>
							<td scope="row">{transaction.account}</td>
							<td scope="row">{transaction.amount}</td>
							<td scope="row">{transaction.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ReportsGenerate;
