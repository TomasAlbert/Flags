import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
	const [value, setValue] = useState("");
	const [selectedContinent, setSelectedContinet] = useState(null);
	const [customFlags, setCustomFlags] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const getCustomFlags = async () => {
			try {
				setIsLoading(true);
				const req = await fetch("http://localhost:3000/");
				const data = await req.json();
				setCustomFlags(data);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};

		getCustomFlags();
	}, []);
	return (
		<>
			<div className="mt-16 container lg:flex items-center justify-between m-auto px-6">
				<SearchBar onSearch={setValue} inputValue={value} />
				<Filter onContinentSelect={setSelectedContinet} selectedContinent={selectedContinent} />
			</div>
			<div className="container animate-bounce m-auto px-6 mt-12">
				<Link to={"/draw"} className="hover:bg-black hover:text-red-600 transition-all duration-300  bg-red-500 font-bold px-6 py-3 text-black">
					🎨 Draw you own flag 🎨
				</Link>
			</div>
			{customFlags.length != 0 ? (
				<div className="container px-6  m-auto mt-14">
					{isLoading ? (
						<div className="flex items-center justify-center">
							<TailSpin height="80" width="80" color="rgb(239 68 68)" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true} />
						</div>
					) : (
						<>
							<h2 className="font-[800] text-xl mb-4">Flags created by people</h2>
							<div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{customFlags.map((flag, i) => {
									return (
										<div className="card" key={i}>
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
												<div className="text-darkBlueLmText shadow-lg h-full">
													<div className="aspect-video">
														<img className=" w-full h-full object-cover" src={flag.flag} style={{ backgroundColor: flag.bg }} />
													</div>
													<div className="px-6 py-8">
														<h2 className="font-[800] text-xl mb-4">{flag.author}</h2>
													</div>
												</div>
											</motion.div>
										</div>
									);
								})}
							</div>
						</>
					)}
				</div>
			) : (
				""
			)}
			<CountryList inputValue={value} selectedContinent={selectedContinent} />
		</>
	);
};

export default Home;
