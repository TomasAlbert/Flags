import { useParams } from "react-router-dom";
import { useCountries } from "../context/CountriesContext.jsx";
import { formatNumber, findCountryById, formatCurrencies, formatLanguages, formatTld } from "../utils/utils.js";
import { formatBorders } from "../utils/utils.jsx";
import StatBox from "./StatBox.jsx";
import BackButton from "./BackButton.jsx";

const CountryDetail = () => {
	const countries = useCountries();
	const { id } = useParams();

	const country = findCountryById(countries, id);
	const { population, region, capital, subregion, tld, currencies, languages, borders } = country;

	return (
		<div className="country-detail container m-auto px-6 text-darkBlueLmText">
			<BackButton />
			<div className="grid grid-cols-1 mt-10 md:mt-20 md:gap-14 xl:gap-20 md:grid-cols-2 ">
				<figure className="aspect-video">
					<img className="h-full object-cover" src={country.flags.svg} alt={country.flags.alt} />
				</figure>
				<div className="py-8 ">
					<h2 className="font-[800] text-2xl mb-6">{id}</h2>
					<div className="flex w-full flex-col lg:flex-row ">
						<div className="w-full mb-6 lg:w-1/2">
							<StatBox statName={"Population:"}>{formatNumber(population)}</StatBox>
							<StatBox statName={"Region:"}>{region}</StatBox>
							<StatBox statName={"Capital:"}>{capital} </StatBox>
							<StatBox statName={"Region:"}>{region}</StatBox>
							<StatBox statName={"Subregion:"}>{subregion}</StatBox>
						</div>
						<div className="w-full mb-6 lg:w-1/2">
							<StatBox statName={"Top level doamin :"}>{formatTld(tld)}</StatBox>
							<StatBox statName={"Currencies:"}>
								<span>{formatCurrencies(currencies)}</span>
							</StatBox>
							<StatBox statName={"Languages:"}>{formatLanguages(languages)}</StatBox>
						</div>
					</div>
					<div className="mt-6 lg:mt-10">
						<StatBox statName={"Border Countries:"} styles={" stat-box flex flex-wrap items-center gap-2"}>
							{borders ? formatBorders(borders) : <span>None</span>}
						</StatBox>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
