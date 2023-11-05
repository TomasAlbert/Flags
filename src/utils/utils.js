export function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function findCountryById(countries, id) {
	return countries.find((country) => country.name.common === id);
}

export function formatCurrencies(currencies) {
	return Object.values(currencies)
		.map((curr) => curr.name)
		.join(", ");
}

export function formatLanguages(languages) {
	return Object.keys(languages).join(", ");
}

export function formatTld(tld) {
	return tld?.join(", ");
}
