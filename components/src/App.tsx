import ListGroup from "./components/ListGroup";

function App() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];

	return (
		<div>
			<ListGroup items={items} heading="Shells" />
		</div>
	);
}

export default App;
