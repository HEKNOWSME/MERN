import styles from "./Card.module.css";
import { BiUser, BiLogOut } from "react-icons/bi";
interface Props {
	children: string;
	image: string;
	toggle: boolean;
}
const CardDrop = ({ children, image, toggle = false }: Props) => {
	return (
		<div
			className={`card ${[styles.card, toggle && styles["card-secondary"]].join(
				" "
			)}`}
		>
			<div className="card-header d-flex align-items-center">
				<h2 className="fs-6"> {children}</h2>
				<img
					className={`img-fluid ${styles.profile}`}
					src={image}
					alt="profile"
				/>
			</div>
			<ul className={styles.list}>
				<li className={`list-group-item ${styles.media}`}>
					<i className={`${[styles.icon, styles.user].join(" ")}`}>
						<BiUser />
					</i>
					<span className={styles.span}>View Profile</span>
				</li>
				<li className={`list-group-item ${styles.media}`}>
					<i className={`${[styles.logout, styles.icon].join(" ")}`}>
						<BiLogOut />
					</i>
					<span>Logout</span>
				</li>
			</ul>
		</div>
	);
};

export default CardDrop;
