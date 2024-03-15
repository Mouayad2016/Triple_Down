import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({
	selectedDate,
	onChange,
	label,
	errorMessage,
}) => {
	const [startDate, setStartDate] = useState(selectedDate);

	const handleDateChange = (date) => {
		setStartDate(date);
		onChange(date);
	};

	return (
		<div className='flex flex-col justify-start items-start py-2'>
			<label className='mb-2 text-navy-700 text-black text-md'>{label}</label>
			<DatePicker
				selected={startDate}
				onChange={handleDateChange}
				dateFormat='dd/MM/yyyy'
				className='p-2 rounded-md'
				placeholderText='Select a date'
			/>
			<p className='text-red-400'>{errorMessage}</p>
		</div>
	);
};

export default DatePickerComponent;
