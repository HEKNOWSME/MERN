import styles from "./Genres.module.css";
import { LuMenu, LuLaugh, LuSwords, LuSkull, LuFilter } from "react-icons/lu";
interface Props {
	onFiltered: (name: string) => void;
}
function Genres({ onFiltered }: Props) {
	return (
		<div className="">
			<div className={styles.minSide}>
				<h4 className={styles.heading}>Video App</h4>
				<i className={styles.icon} onClick={() => {}}>
					<LuMenu size={27} />
				</i>
			</div>

			<section className="main">
				<article
					className={
						"d-flex align-items-center gap-3 justify-content-between mb-3"
					}
					onClick={() => {
						onFiltered("");
					}}
				>
					<span className={styles.listItem}>All</span>
					<i className={styles.listItem}>
						<LuFilter />
					</i>
				</article>
				<article
					className="d-flex align-items-center gap-3 justify-content-between mb-3"
					onClick={() => {
						onFiltered("Action");
					}}
				>
					<span className={styles.listItem}>Action</span>
					<i className={styles.listItem}>
						<LuSwords />
					</i>
				</article>
				<article
					className="d-flex align-items-center gap-3 justify-content-between mb-3"
					onClick={() => {
						onFiltered("Comedy");
					}}
				>
					<span className={styles.listItem}>Comedy</span>
					<i className={styles.listItem}>
						<LuLaugh />
					</i>
				</article>
				<article
					className="d-flex align-items-center gap-3 justify-content-between mb-3"
					onClick={() => {
						onFiltered("Thriller");
					}}
				>
					<span className={styles.listItem}>Thriller</span>
					<i className={styles.listItem}>
						<LuSkull />
					</i>
				</article>
			</section>
		</div>
	);
}

export default Genres;
