import Card from "../Cards/Card";
import { User } from "../Users/Users";
import styles from "./Main.module.css";
interface Props {
	isToggled: boolean;
	users: User[]
}
const Main = ({ isToggled = true, users }: Props) => {
	return (
		<main className={`${[styles.main, isToggled && styles.toggled].join(" ")}`}>
			<Card isToggled={isToggled} users={users} />
		</main>
	);
};

export default Main;
