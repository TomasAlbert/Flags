import { createContext, useContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const useCountries = () => useContext(CountriesContext);
export const CountriesProvider = ({ children }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getCountries = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all");
				if (!response.ok) {
					throw new Error("something went wrong");
				}
				const data = await response.json();
				setCountries(data);
			} catch (err) {
				console.log(err);
			}
		};
		getCountries();
	}, []);

	return <CountriesContext.Provider value={countries}>{children}</CountriesContext.Provider>;
};
