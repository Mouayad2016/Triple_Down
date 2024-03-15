import React from "react";
import CurrencyExchangeSearchBox from "../components/organisms/CurrencyExchangeSearchBox";
import ResultsTable from "../components/organisms/ResultsTable";
import LatestCurrencyRate from "../components/organisms/LatestCurrencyRate";
import useCurrencyExchangeRate from "../hooks/useCurrencyRate";
import { validateCurrency } from "../utils/validation/inputValidation";
export default function Home() {
	const {
		dateRangeExchangeRate,
		setDateRangeExchangeRate,
		isLoading,
		setIsLoading,
		getExchangeRate,
		currencyCode,
		setCurrencyCode,
		fromDate,
		setFromDate,
		toDate,
		setToDate,
		error,
		setError,
		latesExchangeRate,
		setLatesExchangeRate,
		textInputError,
		setTextInputError,
		fromDateInputError,
		setFromDateInputError,
		toDateInputError,
		setToDateInputError,
	} = useCurrencyExchangeRate();

	const handleFetchRate = async () => {
		setTextInputError(null);
		setError(null);
		try {
			const result = validateCurrency(currencyCode);
			if (!result.isValid) {
				setTextInputError(result.message);
				return;
			}
			if (fromDate > toDate) {
				setError(
					"End date cannot precede start date. Please select a valid date range."
				);
				return;
			}
			setIsLoading(true);
			await getExchangeRate();
		} catch (error) {
			setDateRangeExchangeRate(null);
			setLatesExchangeRate(null);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const onStartDateChange = (date) => {
		const today = new Date();
		if (date > today) {
			setFromDateInputError("Start date cannot be in the future.");
		} else {
			setFromDate(date);
			setFromDateInputError(null);
		}
	};

	const onEndDateChange = (date) => {
		const today = new Date();

		if (date > today) {
			setToDateInputError("End date cannot be in the future.");
		} else {
			setToDate(date);
			setToDateInputError(null);
		}
	};

	return (
		<main className='flex flex-col items-center justify-center min-h-screen p-6 md:p-12'>
			<div className='w-full md:flex md:justify-center md:space-x-6 text-black'>
				<div className='md:w-96 mb-6 md:mb-0 rounded-md bg-slate-100'>
					<CurrencyExchangeSearchBox
						currencyCode={currencyCode}
						setCurrencyCode={setCurrencyCode}
						fromDate={fromDate}
						onStartDateChange={onStartDateChange}
						toDate={toDate}
						onEndDateChange={onEndDateChange}
						handleFetchRate={handleFetchRate}
						isLoading={isLoading}
						error={textInputError}
						fromDateInputError={fromDateInputError}
						toDateInputError={toDateInputError}
					/>{" "}
				</div>
				{latesExchangeRate ? (
					<div className='flex mb-6 p-4 rounded-md bg-slate-100 justify-center'>
						<LatestCurrencyRate data={latesExchangeRate} />
					</div>
				) : null}
				{error ? (
					<div className='flex mb-6 p-4 rounded-md bg-slate-100 justify-center'>
						<p className='text-red-400'>{error}</p>
					</div>
				) : null}
				{dateRangeExchangeRate ? (
					<div className='flex mb-6 p-4 rounded-md bg-slate-100 justify-center'>
						<ResultsTable data={dateRangeExchangeRate} />
					</div>
				) : null}
			</div>
		</main>
	);
}
