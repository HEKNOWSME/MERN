import { Link } from "react-router-dom";
import { User } from "../pages/Users";
import "./userList.css";

const UsersList = ({ users }: { users: User[] }) => {
	if (users.length === 0) return <h3 className="text-center">No user Found</h3>;
	return (
		<div>
			<section>
				{users.map((user) => (
					<article
						className="myCard d-flex align-items-center p-1 gap-2"
						key={user.id}
					>
						<img src={user.image} className="img" alt="user" />
						<div>
							<Link className="nav-link" to={`/u${user.id}/places`}>
								{user.name}
							</Link>
							<span>
								{user.places} {user.places > 1 ? "Places" : "Place"}
							</span>
						</div>
					</article>
				))}
			</section>
		</div>
	);
};

export default UsersList;
