import styles from "./movies.module.css"
interface Movie {
	_id: string;
	title: string;
	genre: { _id: string; name: string };
	numberInStock: number;
	dailyRentalRate: number;
}
interface Props {
	items: Movie[];
}
const AllTable = ({ items }: Props) => {
	return (
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
						<td>{item.title}</td>
						<td>{item.genre.name}</td>
						<td>{item.numberInStock}</td>
						<td>{item.dailyRentalRate}</td>
						<td className= {`${styles["btn-flex"]}`}>
							<button type="button" className="btn btn-outline-primary">
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
	);
};

export default AllTable;
