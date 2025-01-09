import { useState } from "react";
import UsersList from "../components/UsersList";
export interface User {
	id: number;
	name: string;
	image: string;
	places: number;
}
const Users = () => {
	const [users] = useState<User[]>([
		{ id: 1, image: "/theonw.png", name: "iranzi claude", places: 3 },
		{ id: 2, image: "/image.png", name: "Kenny Rwigamba", places: 1 },
	]);
	return (
		<div>
			<UsersList users={users} />
		</div>
	);
};

export default Users;
