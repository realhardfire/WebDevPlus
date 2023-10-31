interface Props {
	buttonType?: "primary" | "success" | "danger" | "light" | "dark";
	// ?: means this value is not compulsory
	// "primary" | "success" | "danger" | "light" | "dark" this means that value could be only one of them
	// if not compiler throws an error

	label: string;
	onButtonClick: () => void;
}

export default function ButtonComp({
	buttonType,
	label,
	onButtonClick,
}: Props) {
	return (
		<button
			type="button"
			className={"btn btn-" + buttonType}
			onClick={onButtonClick}
		>
			{label}
		</button>
	);
}
