import { BsList } from "react-icons/bs";
import { MdDashboard, MdSettings } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import styles from "./SideBar.module.css";
import { useState } from "react";
interface Props {
	isToggled: boolean;
}
const SideBar = ({ isToggled = false }: Props) => {
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
					<BsList size={35} />
				</i>
			</div>
			<section className={`${styles.main}`}>
				<article className={`${styles.media}`}>
					<i className={styles.mediaIcon}>
						<MdDashboard size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Dashboard</span>
				</article>
				<article className={`${styles.media}`}>
					<i className={styles.mediaIcon}>
						<BiUser size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Users</span>
				</article>
				<article className={`${styles.media}`}>
					<i className={styles.mediaIcon}>
						<MdSettings size={25} />
					</i>
					<span className={`${styles["media-content"]}`}>Settings</span>
				</article>
			</section>
		</aside>
	);
};

export default SideBar;
