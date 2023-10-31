import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	// useState returns an array
	const [activeIndex, setActiveIndex] = useState(-1);

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
							onSelectItem(item, index);
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
