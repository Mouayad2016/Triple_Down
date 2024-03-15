import React from "react";

const SubmitButton = ({ onClick, label }) => {
	const handleOnClick = (e) => {
		e.preventDefault();
		onClick();
	};

	return (
		<button className='p-4 bg-blue-300 rounded-md my-4' onClick={handleOnClick}>
			{label}
		</button>
	);
};

export default SubmitButton;
