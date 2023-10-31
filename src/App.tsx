import Alert from "./Alert";
import ButtonComp from "./ButtonComp";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];

	const handleSelecteItem = (item: string, index: number) => {
		console.log(item + " on index " + index + " is selected");
	};

	const handleButtonClick = () => {
		console.log("Button clicked !!!");
	};

	return (
		<div>
			<Alert>
				<i>Good</i> <b>Morning...</b>
			</Alert>

			<br />
			<br />

			<ListGroup
				items={items}
				heading="Shells"
				onSelectItem={handleSelecteItem}
			/>

			<br />
			<br />

			<ButtonComp
				buttonType="dark"
				label="done"
				onButtonClick={handleButtonClick}
			/>
		</div>
	);
}

export default App;
