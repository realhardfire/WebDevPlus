import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}

function ListGroup({ items, heading }: Props) {
	const [activeIndex, setActiveIndex] = useState(-1);
	// useState returns an array

	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							activeIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={index}
						onClick={() => {
							setActiveIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
