import Country from "./Country";
import { useCountries } from "../context/CountriesContext.jsx";
const CountryList = ({ inputValue, selectedContinent }) => {
	const countries = useCountries();
	const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()));
	let continentFiltered;
	if (selectedContinent !== "All") {
		continentFiltered = filteredCountries.filter((country) => country.region.includes(selectedContinent));
	} else {
		continentFiltered = filteredCountries;
	}
	return (
		<div className="container px-6  m-auto mt-14">
			<div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{selectedContinent !== null || undefined
					? continentFiltered?.map((country, index) => <Country key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} img={country.flags.svg} alt={country.flags.alt}></Country>)
					: filteredCountries?.map((country, index) => <Country key={index} name={country.name.common} population={country.population} region={country.region} capital={country.capital} img={country.flags.svg} alt={country.flags.alt}></Country>)}
			</div>
		</div>
	);
};

export default CountryList;
