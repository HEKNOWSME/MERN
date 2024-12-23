import { BsSearch, BsMoon, BsSun } from "react-icons/bs";
import styles from "./nav.module.css";
import { useState } from "react";
import CardDrop from "../DropDown/CardDrop";

interface Props {
	onSearch: (text: string) => void;
	onToggle: () => void;
}
const Navigation = ({ onSearch, onToggle }: Props) => {
	const [nav, setNav] = useState({
		isLight: true,
		image: true,
	});
	const [toggled, setToggled] = useState(false);

	return (
		<nav
			className={` ${[styles.nav, !nav.isLight && styles.isLight].join(" ")}`}
		>
			<div className={`d-flex align-items-center ${styles["input-group"]} p-2`}>
				<BsSearch color="black" />
				<input
					type="search"
					name="search"
					aria-label="search"
					className={styles.input}
					placeholder="Search Users"
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<div
				className={`d-flex align-items-center flex-grow-1 justify-content-end ${styles.navList}`}
			>
				<i
					onClick={() => {
						setNav({ ...nav, isLight: !nav.isLight });
						onToggle();
						setToggled(!toggled);
					}}
					className={styles.icon}
				>
					{nav.isLight ? <BsSun /> : <BsMoon size={20} />}
				</i>
				<div className="d-flex justify-content-between align-items-center">
					<span>Claudistack</span>
					<img
						src="profile.png"
						alt="profile"
						className={`img-fluid ${styles.profile}`}
						onClick={() => setNav({ ...nav, image: !nav.image })}
					/>
				</div>
			</div>
			<div
				className={`${[
					styles["profile-card"],
					nav.image && styles.expanded,
				].join(" ")}`}
			>
				<CardDrop image="profile.png" toggle={toggled}>
					Claudistack
				</CardDrop>
			</div>
		</nav>
	);
};

export default Navigation;
