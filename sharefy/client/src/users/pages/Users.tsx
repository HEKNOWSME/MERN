import { useState } from "react";
import UsersList from "../components/UsersList";
export interface User {
	id: number;
	name: string;
	image: string;
	places: 3;
}
const Users = () => {
	const [users, setUsers] = useState<User[]>([
		{ id: 1, image: "/theonw.png", name: "iranzi claude", places: 3 },
	]);
	return (
		<div>
			<UsersList users={users} />
		</div>
	);
};

export default Users;
