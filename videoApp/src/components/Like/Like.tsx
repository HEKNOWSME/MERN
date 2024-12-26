import { useState } from "react";
import { LuHeart } from "react-icons/lu";
import styles from "./Like.module.css";
const Like = () => {
	const [liked, setLiked] = useState(false);
	return (
		<i onClick={() => setLiked(!liked)} className={styles.like}>
			{!liked ? <LuHeart /> : <LuHeart color="red" />}
		</i>
	);
};
export default Like;
