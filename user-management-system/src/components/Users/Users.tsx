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
	onDelete: (user: User) => void;
	onEdit: (user: User) => void;
}
const GetUsers = ({ users, toggled = false, onDelete, onEdit }: Props) => {
	return (
		<div>
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
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={() => onEdit(user)}
								>
									Edit
								</button>
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => onDelete(user)}
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

export default GetUsers;
