export function processData(dataObject) {
	const entries = Object.entries(dataObject);
	const dailyPrices = entries.slice(1).map(([date, rates]) => ({
		date,
		open: parseFloat(rates["1. open"]),
		high: parseFloat(rates["2. high"]),
		low: parseFloat(rates["3. low"]),
		close: parseFloat(rates["4. close"]),
	}));
	return dailyPrices;
}

export function filterDataByDateRange(data, startDate, endDate) {
	const correctedEndDate = new Date(endDate);
	correctedEndDate.setDate(correctedEndDate.getDate() + 1);

	return Object.entries(data)
		.filter(([date]) => {
			const currentDate = new Date(date);
			return currentDate >= startDate && currentDate < correctedEndDate;
		})
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {});
}

export function formatDateToLocalISO(date) {
	const offset = date.getTimezoneOffset();
	const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
	return adjustedDate.toISOString().split("T")[0];
}
