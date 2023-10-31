import Alert from "./Alert";
import ButtonComp from "./ButtonComp";
import { DisAlert } from "./DisAlert";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];

	const handleSelecteItem = (item: string, index: number) => {
		console.log(item + " on index " + index + " is selected");
	};

	const handleButtonClick = () => {
		console.log("Button clicked !!!");
	};

	/////////////////////////////////
	return (
		<div>
			<Alert>
				<i>Good</i> <b>Morning...</b>
			</Alert>

			<br />

			<ListGroup
				items={items}
				heading="Shells"
				onSelectItem={handleSelecteItem}
			/>

			<br />

			<DisAlert />

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
function useState(arg0: number): [any, any] {
	throw new Error("Function not implemented.");
}
