import React from "react";

const TextField = ({
	label,
	placeholder,
	value,
	onChange,
	className,
	error,
}) => {
	return (
		<div className={className}>
			<label className='flex text-navy-700 text-black text-md text-start'>
				{label}
			</label>
			<div className='items-start'>
				<input
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					className='w-full rounded-md p-3 text-black mt-2'
				/>
				<p className='ml-3 text-red-400 text-start'> {error}</p>
			</div>
		</div>
	);
};

export default TextField;
