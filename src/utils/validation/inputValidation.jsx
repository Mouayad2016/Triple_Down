export function validateCurrency(value) {
	const trimmedValue = value.trim();

	if (trimmedValue === "") {
		return {
			isValid: false,
			message: "Currency code cannot be empty.",
		};
	}
	const isValid = /^[A-Za-z]{3}$/.test(trimmedValue);
	if (!isValid) {
		return {
			isValid: false,
			message: "Currency code must be exactly 3 uppercase letters.",
		};
	}
	return {
		isValid: true,
		message: "Valid currency code.",
	};
}
