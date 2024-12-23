import styles from "./Card.module.css";
import { LuUsers, LuCreditCard, LuDollarSign, LuCoins } from "react-icons/lu";
interface Props {
	isToggled: boolean;
}
const Card = ({ isToggled = false }: Props) => {
	return (
		<div className={`${[styles.cards, isToggled && styles.toggled].join(" ")}`}>
			<div className={`card ${[styles.card, styles.one].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuUsers />
					</i>
					<p className="card-title">Total Users</p>
				</header>
				<div className={styles.cardBody}>$ 1000</div>
			</div>
			<div className={`card ${[styles.card, styles.two].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuCreditCard />
					</i>
					<p className="card-title">Paid Users</p>
				</header>
				<div className={styles.cardBody}>$ 1000</div>
			</div>
			<div className={`card ${[styles.card, styles.three].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuUsers />
					</i>
					<p className="card-title">Pending Users</p>
				</header>
				<div className={styles.cardBody}>$ 1000</div>
			</div>
			<div className={`card ${[styles.card, styles.four].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuDollarSign />
					</i>
					<p className="card-title">Total Income</p>
				</header>
				<div className={styles.cardBody}>$ 1000</div>
			</div>
			<div className={`card ${[styles.card, styles.five].join(" ")}`}>
				<header className={` ${styles["card-header"]}`}>
					<i>
						<LuCoins />
					</i>
					<p className="card-title">Total Credits</p>
				</header>
				<div className={styles.cardBody}>$ 1000</div>
			</div>
		</div>
	);
};

export default Card;
