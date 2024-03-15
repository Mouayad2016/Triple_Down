import React from "react";

const ResultsTable = ({ data }) => {
	return (
		<div className='p-6 text-center overflow-y-auto overflow-x-auto'>
			<h2 className='text-lg font-bold my-6'>Results Table</h2>
			<div className='max-h-[500px]'>
				<table>
					<thead>
						<tr>
							<th className='border-2 px-4 py-2'>Date</th>
							<th className='border-2 px-4 py-2'>Open</th>
							<th className='border-2 px-4 py-2'>High</th>
							<th className='border-2 px-4 py-2'>Lown</th>
							<th className='border-2 px-4 py-2'>Close</th>
						</tr>
					</thead>
					<tbody>
						{data.map((data, index) => (
							<tr key={index}>
								<td className='border-2 px-4 py-2'>{data.date}</td>
								<td className='border-2 px-4 py-2'>{data.open}</td>
								<td className='border-2 px-4 py-2'>{data.high}</td>
								<td className='border-2 px-4 py-2'>{data.low}</td>
								<td className='border-2 px-4 py-2'>{data.close}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ResultsTable;
