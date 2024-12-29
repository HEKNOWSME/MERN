import styles from "./movies.module.css";
import Like from "../Like/Like";
import { NavLink } from "react-router-dom";
export interface Movie {
	_id: string;
	title: string;
	genre: { _id: string; name: string };
	numberInStock: number;
	dailyRentalRate: number;
}
interface Props {
	items: Movie[];
	onDelete: (id: string) => void;
}
const AllTable = ({ items, onDelete }: Props) => {
	if (items.length === 0)
		return <h3 className="text-center">No Available movie</h3>;
	return (
		<div className="w-100">
			<table className="table table-bordered table-dark">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Genre</th>
						<th scope="col">Stock</th>
						<th scope="col">Rate</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item._id}>
							<td>
								<NavLink to={`/movies/${item._id}/${item.title}`}>
									{item.title}
								</NavLink>
							</td>
							<td>{item.genre.name}</td>
							<td>{item.numberInStock}</td>
							<td>{item.dailyRentalRate}</td>
							<td className={`${styles["btn-flex"]}`}>
								<Like />
								<button
									type="button"
									className="btn btn-outline-primary"
									onClick={() => onDelete(item._id)}
								>
									Delete
								</button>
								<button type="button" className="btn btn-outline-danger">
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllTable;
