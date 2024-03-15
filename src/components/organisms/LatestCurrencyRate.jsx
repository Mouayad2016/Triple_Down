import React from "react";

const LatestCurrencyRate = ({ data }) => {
	return (
		<div className='p-6 text-center overflow-y-auto overflow-x-auto'>
			<h2 className='text-lg font-bold my-6'>Latest Currency Rate</h2>
			<div className=' max-h-[500px]'>
				<p> {data} USD</p>
			</div>
		</div>
	);
};

export default LatestCurrencyRate;
