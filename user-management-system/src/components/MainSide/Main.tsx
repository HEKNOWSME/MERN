import Card from "../Cards/Card";
import styles from "./Main.module.css";
interface Props {
	isToggled: boolean;
}
const Main = ({ isToggled = true }: Props) => {
	return (
		<main className={`${[styles.main, isToggled && styles.toggled].join(" ")}`}>
			<Card />
		</main>
	);
};

export default Main;
