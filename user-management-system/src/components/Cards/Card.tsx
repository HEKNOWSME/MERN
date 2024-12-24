import { User } from "../Users/Users";
import styles from "./Card.module.css";
import { LuUsers, LuCreditCard, LuDollarSign, LuCoins } from "react-icons/lu";

interface Props {
	isToggled: boolean;
	users: User[];
}
const Card = ({ isToggled = false, users }: Props) => {
	const paidUsers = users.filter((u) => u.status === "paid");
	const pendingUsers = users.filter((u) => u.status === "pending");
	return (
		<div className={`${[styles.cards, isToggled && styles.toggled].join(" ")}`}>
			<div className={`card ${[styles.card, styles.one].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuUsers />
					</i>
					<p className="card-title">Total Users</p>
				</header>
				<div className={styles.cardBody}>{users.length}</div>
			</div>
			<div className={`card ${[styles.card, styles.two].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuCreditCard />
					</i>
					<p className="card-title">Paid Users</p>
				</header>
				<div className={styles.cardBody}>
					{paidUsers.length} Users ${" "}
					{paidUsers?.reduce((acc, user) => acc + user.amount, 0).toFixed(2)}
				</div>
			</div>
			<div className={`card ${[styles.card, styles.three].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuUsers />
					</i>
					<p className="card-title">Pending Users</p>
				</header>
				<div className={styles.cardBody}>
					{pendingUsers.length} Users ${" "}
					{pendingUsers?.reduce((acc, user) => acc + user.amount, 0).toFixed(2)}
				</div>
			</div>
			<div className={`card ${[styles.card, styles.four].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuDollarSign />
					</i>
					<p className="card-title">Total Income</p>
				</header>
				<div className={styles.cardBody}>
					$ {users.reduce((acc, user) => acc + user.amount, 0)}
				</div>
			</div>
			<div className={`card ${[styles.card, styles.five].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuCoins />
					</i>
					<p className="card-title">Total Credits</p>
				</header>
				<div className={styles.cardBody}>
					${" "}
					{pendingUsers?.reduce((acc, user) => acc + user.amount, 0).toFixed(2)}
				</div>
			</div>
		</div>
	);
};

export default Card;
