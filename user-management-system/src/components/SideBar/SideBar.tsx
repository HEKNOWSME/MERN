import { LuUsers, LuList, LuLayoutDashboard, LuSettings } from "react-icons/lu";
import styles from "./SideBar.module.css";
import { useState } from "react";
interface Props {
	isToggled: boolean;
	onClick: (string: string) => void;
}
const SideBar = ({ isToggled = false, onClick }: Props) => {
	const [toggled, setToggled] = useState(false);
	return (
		<aside
			className={`${[
				styles.sideBar,
				toggled && styles.toggled,
				isToggled && styles.isToggled,
			].join(" ")}`}
		>
			<div className={`${styles.minBar} fw-bolder`}>
				<h4 className={styles.heading}>UserHub Pro</h4>
				<i className={styles.btn} onClick={() => setToggled(!toggled)}>
					<LuList size={35} />
				</i>
			</div>
			<section className={`${styles.main}`}>
				<article
					className={`${styles.media}`}
					onClick={() => onClick("Dashboard")}
				>
					<i className={styles.mediaIcon}>
						<LuLayoutDashboard size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Dashboard</span>
				</article>
				<article className={`${styles.media}`} onClick={() => onClick("Users")}>
					<i className={styles.mediaIcon}>
						<LuUsers size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Users</span>
				</article>
				<article
					className={`${styles.media}`}
					onClick={() => onClick("Settings")}
				>
					<i className={styles.mediaIcon}>
						<LuSettings size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Settings</span>
				</article>
			</section>
		</aside>
	);
};

export default SideBar;
