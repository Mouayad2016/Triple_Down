import React from "react";
import TextField from "../atoms/Input/TextField";
import SubmitButton from "../atoms/button/SubmitButton";
import DatePicker from "../atoms/datePicker/DatePicker";
import LoadingComponent from "../atoms/loading/Loading";

const CurrencyExchangeSearchBox = ({
	currencyCode,
	setCurrencyCode,
	fromDate,
	onStartDateChange,
	toDate,
	onEndDateChange,
	handleFetchRate,
	isLoading,
	error,
	fromDateInputError,
	toDateInputError,
}) => {
	return (
		<div className='p-6 text-black w-full'>
			<form onSubmit={handleFetchRate} className='flex flex-col text-center'>
				<p className='text-lg font-bold my-6'>Exchange Rate Against USD</p>
				<TextField
					label='Currency Code'
					value={currencyCode}
					onChange={(e) => setCurrencyCode(e.target.value)}
					placeholder='Enter currency code (e.g., USD, EUR)'
					error={error}
				/>
				<DatePicker
					label='From'
					selectedDate={fromDate}
					onChange={onStartDateChange}
					errorMessage={fromDateInputError}
				/>
				<DatePicker
					label='To'
					selectedDate={toDate}
					onChange={onEndDateChange}
					errorMessage={toDateInputError}
				/>
				{isLoading ? (
					<LoadingComponent />
				) : (
					<SubmitButton label='Fetch Rate' onClick={handleFetchRate} />
				)}
			</form>
		</div>
	);
};

export default CurrencyExchangeSearchBox;
