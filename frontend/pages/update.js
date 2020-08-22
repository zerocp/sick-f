import Link from "next/link";
import UpdateItem from "../components/UpdateItem";

const Update = ({ query }) => {
	return (
		<div>
			<UpdateItem id={query.id} />
		</div>
	);
};

export default Update;
