import cache from "../utils/cache";
import {
	filterDataByDateRange,
	formatDateToLocalISO,
	processData,
} from "./serviceUtils";

async function fetchLatestExchangeRate(currencyCode) {
	const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
	const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyCode}&to_currency=USD&apikey=${API_KEY}`;

	const response = await fetch(url);
	const data = await response.json();

	if (!data["Realtime Currency Exchange Rate"]) {
		throw new Error("Failed to fetch the latest exchange rate.");
	}

	const rate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
	return rate;
}

async function fetchExchangeRateWithDateRangeAndCaching(
	currencyCode,
	startDate,
	endDate
) {
	const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
	if (!API_KEY) throw new Error("API key is not defined.");

	const formattedStartDate = formatDateToLocalISO(startDate);
	const formattedEndDate = formatDateToLocalISO(endDate);
	const cacheKey = `${currencyCode}_${formattedStartDate}_${formattedEndDate}`;
	const ttl = 24 * 60 * 60 * 1000;

	const cachedData = cache.get(cacheKey);
	if (cachedData) {
		return cachedData;
	}

	const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${currencyCode}&to_symbol=USD&apikey=${API_KEY}&outputsize=full`;

	const response = await fetch(url);
	const data = await response.json();

	if (data["Error Message"]) {
		throw new Error(data["Error Message"]);
	}

	const timeSeriesKey = "Time Series FX (Daily)";
	if (!data[timeSeriesKey])
		throw new Error("Invalid data format received from API.");

	const filteredData = filterDataByDateRange(
		data[timeSeriesKey],
		startDate,
		endDate
	);

	const dailyPrices = processData(filteredData);

	const sortedData = dailyPrices.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	cache.set(cacheKey, sortedData, ttl);
	return sortedData;
}

export { fetchExchangeRateWithDateRangeAndCaching, fetchLatestExchangeRate };
