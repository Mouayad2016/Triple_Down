import React from "react";

function LoadingComponent() {
	return (
		<div className='flex items-center justify-center'>
			<div className='h-10 w-10 animate-spin rounded-full border-t-2 border-blue-700 border-b-2 border-brand-500'></div>
		</div>
	);
}

export default LoadingComponent;
