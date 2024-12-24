import styles from "./Users.module.css";
export interface User {
	id: number;
	username: string;
	email: string;
	status: string;
	amount: number;
}
interface Props {
	users: User[];
	toggled: boolean;
}
const GetUsers = ({ users, toggled = false }: Props) => {
	return (
		<div>
			{users.length == 0 ? (
				<h2 className="text-danger text-center">No User Available</h2>
			) : (
				<table
					className={`table table-bordered  ${styles.toggled} ${
						toggled && "table-dark"
					}`}
				>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Username</th>
							<th scope="col">Email</th>
							<th scope="col">Amount To Pay</th>
							<th scope="col">Status</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.amount}</td>
								<td>{user.status === "pending" ? user.status : "paid"}</td>
								<td className={`${styles.flex}`}>
									<button type="button" className="btn btn-outline-primary">
										Edit
									</button>
									<button type="button" className="btn btn-outline-danger">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default GetUsers;
