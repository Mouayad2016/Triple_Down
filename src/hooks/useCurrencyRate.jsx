import { useState } from "react";
import {
	fetchExchangeRateWithDateRangeAndCaching,
	fetchLatestExchangeRate,
} from "../api/service";

const useCurrencyExchangeRate = () => {
	const [dateRangeExchangeRate, setDateRangeExchangeRate] = useState(null);
	const [latesExchangeRate, setLatesExchangeRate] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currencyCode, setCurrencyCode] = useState("");
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const [textInputError, setTextInputError] = useState(null);
	const [fromDateInputError, setFromDateInputError] = useState(null);
	const [toDateInputError, setToDateInputError] = useState(null);

	const getExchangeRate = async () => {
		if (fromDate && toDate) {
			const data = await fetchExchangeRateWithDateRangeAndCaching(
				currencyCode,
				fromDate,
				toDate
			);
			if (data.length > 0) {
				setDateRangeExchangeRate(data);
			} else {
				throw new Error("No exchange rate data found.");
			}
		} else {
			const data = await fetchLatestExchangeRate(currencyCode);
			setLatesExchangeRate(data);
		}
	};

	return {
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
	};
};
export default useCurrencyExchangeRate;
