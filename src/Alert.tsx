import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function ({ children }: Props) {
	return (
		<div className="alert alert-primary" role="alert">
			{children}
		</div>
	);
}
