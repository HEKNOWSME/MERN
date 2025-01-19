import {
	LuChartArea,
	LuLayoutDashboard,
	LuReceipt,
	LuWallet,
} from "react-icons/lu";
import "./aside.css";
interface Props {
	onIcon: (target: string) => void;
}

const Aside = ({ onIcon }: Props) => {
	return (
		<>
			<p className="fw-bolder p-2 icon icon_paragraph">WWA Manager</p>
			<div className="d-flex gap-2 icon" onClick={() => onIcon("dashboard")}>
				<i className="icon-color">
					<LuLayoutDashboard size={25} />
				</i>
				<p className="icon_paragraph">Dashboard</p>
			</div>
			<div className="d-flex gap-2 icon" onClick={() => onIcon("transactions")}>
				<i className="icon-color">
					<LuReceipt size={25} />
				</i>
				<p className="icon_paragraph">Transactions</p>
			</div>
			<div className="d-flex gap-2 icon" onClick={() => onIcon("budget")}>
				<i className="icon-color">
					<LuWallet size={25} />
				</i>
				<p className="icon_paragraph">Budget</p>
			</div>
			<div className="d-flex gap-2 icon" onClick={() => onIcon("reports")}>
				<i className="icon-color">
					<LuChartArea size={25} />
				</i>
				<p className="icon_paragraph">Reports</p>
			</div>
		</>
	);
};

export default Aside;
