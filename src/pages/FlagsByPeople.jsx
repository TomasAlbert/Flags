import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TailSpin } from "react-loader-spinner";
import BackButton from "../components/BackButton";
const FlagsByPeople = () => {
	const [customFlags, setCustomFlags] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const getCustomFlags = async () => {
			setIsLoading(true);
			try {
				const req = await fetch("https://worrisome-wasp-trousers.cyclic.app/");
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
		<div className="container mb-14 px-6 m-auto">
			{isLoading && (
				<div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
					<div className="flex items-center justify-center">
						<TailSpin height="80" width="80" color="black" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true} />
					</div>
				</div>
			)}
			<BackButton />
			<h2 className="font-[800] mt-10 text-xl mb-4">Check the custom flags created by people.</h2>
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
		</div>
	);
};

export default FlagsByPeople;
