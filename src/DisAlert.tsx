import React, { useState } from "react";

export const DisAlert = () => {
	const [alertVisible, setAlertVisibility] = useState(1);
	const onShow = () => {
		setAlertVisibility(1);
	};
	const onClose = () => {
		setAlertVisibility(0);
	};

	return (
		<>
			{alertVisible && (
				<div
					className="alert alert-warning alert-dismissible fade show"
					role="alert"
				>
					<strong>Holy guacamole!</strong>
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
						onClick={() => setAlertVisibility(0)}
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			)}

			<button
				type="button"
				className="btn btn-dark"
				onClick={() => setAlertVisibility(1)}
			>
				Show Alert
			</button>
		</>
	);
};
