import styles from "./Card.module.css";
import { LuUsers, LuCreditCard, LuDollarSign, LuCoins } from "react-icons/lu";
const Card = () => {
	return (
		<div className="cards">
			<div className={`card ${styles.card}`}>
				<header className={`card-header ${styles["card-header"]}`}>
					<p className="card-title">Total Users</p>
					<i>
						<LuUsers />
					</i>
				</header>
				<div className="card-body"></div>
			</div>
			<div className={`card ${styles.card}`}>
				<header className={`card-header ${styles["card-header"]}`}>
					<p className="card-title">Paid Users</p>
					<i>
						<LuCreditCard />
					</i>
				</header>
				<div className="card-body"></div>
			</div>
			<div className={`card ${styles.card}`}>
				<header className={`card-header ${styles["card-header"]}`}>
					<p className="card-title">Pending Users</p>
					<i>
						<LuUsers />
					</i>
				</header>
				<div className="card-body"></div>
			</div>
			<div className={`card ${styles.card}`}>
				<header className={`card-header ${styles["card-header"]}`}>
					<p className="card-title">Total Income</p>
					<i>
						<LuDollarSign />
					</i>
				</header>
				<div className="card-body"></div>
			</div>
			<div className={`card ${styles.card}`}>
				<header className={`card-header ${styles["card-header"]}`}>
					<p className="card-title">Total Credits</p>
					<i>
						<LuCoins />
					</i>
				</header>
				<div className="card-body"></div>
			</div>
		</div>
	);
};

export default Card;
