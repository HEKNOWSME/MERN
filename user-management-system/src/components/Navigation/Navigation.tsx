import { LuSearch, LuMoon, LuSun } from "react-icons/lu";
import styles from "./nav.module.css";
import { useState } from "react";
import CardDrop from "../DropDown/CardDrop";

interface Props {
	onSearch: (text: string) => void;
	toUser: boolean;
	onToggle: () => void;
}
const Navigation = ({ onSearch, onToggle, toUser = false }: Props) => {
	const [nav, setNav] = useState({
		isLight: true,
		image: false,
	});
	const [toggled, setToggled] = useState(false);

	return (
		<nav
			className={` ${[styles.nav, !nav.isLight && styles.isLight].join(" ")}`}
		>
			<div className={`d-flex align-items-center ${styles["input-group"]} p-2`}>
				<LuSearch color="black" />
				<input
					type="search"
					name="search"
					aria-label="search"
					className={styles.input}
					placeholder="Search Users"
					onChange={(e) => onSearch(e.target.value)}
					disabled={!toUser}
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
					{nav.isLight ? <LuSun /> : <LuMoon size={20} />}
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
