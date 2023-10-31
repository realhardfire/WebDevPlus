import Alert from "./Alert";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];

	const handleSelecteItem = (item: string, index: number) => {
		console.log(item + " on index " + index + " is selected");
	};

	return (
		<div>
			<Alert>
				<i>Good</i> <b>Morning...</b>
			</Alert>
			<ListGroup
				items={items}
				heading="Shells"
				onSelectItem={handleSelecteItem}
			/>
		</div>
	);
}

export default App;
