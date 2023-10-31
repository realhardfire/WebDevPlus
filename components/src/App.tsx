import ListGroup from "./components/ListGroup";

function App() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];

	const handleSelecteItem = (item: string, index: number) => {
		console.log(item + " on index " + index + " is selected");
	};

	return (
		<div>
			<ListGroup
				items={items}
				heading="Shells"
				onSelectItem={handleSelecteItem}
			/>
		</div>
	);
}

export default App;
