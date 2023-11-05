import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
	const [value, setValue] = useState("");
	const [selectedContinent, setSelectedContinet] = useState(null);

	return (
		<>
			<div className="mt-16 container lg:flex items-center justify-between m-auto px-6">
				<SearchBar onSearch={setValue} inputValue={value} />
				<Filter onContinentSelect={setSelectedContinet} selectedContinent={selectedContinent} />
			</div>
			<div className=" text-center container flex flex-col md:flex-row animate-bounce m-auto px-6 mt-12">
				<Link to={"/draw"} className="rounded-lg hover:bg-black hover:text-red-600 transition-all duration-300  bg-red-500 font-bold px-6 py-3 text-black">
					🎨 Draw your own flag 🎨
				</Link>
				<Link to={"/custom-flags"} className=" text-center  rounded-lg mt-3 md:mt-0 md:ml-2  hover:bg-black hover:text-red-600 transition-all duration-300  bg-red-500 font-bold px-6 py-3 text-black">
					Check the people's custom flags.
				</Link>
			</div>
			<CountryList inputValue={value} selectedContinent={selectedContinent} />
		</>
	);
};

export default Home;
