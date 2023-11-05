import { Link } from "react-router-dom";
import { formatNumber } from "../utils/utils.js";
import { motion } from "framer-motion";

const Country = ({ name, population, region, capital, img, alt }) => {
	return (
		<div className="card">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<Link to={name}>
					<div className="text-darkBlueLmText shadow-lg h-full">
						<div className="aspect-video">
							<img className="w-full h-full object-cover" src={img} alt={alt} />
						</div>
						<div className="dark:hidden px-6 py-8">
							<h2 className="font-[800] text-xl mb-4">{name}</h2>
							<div className="pb-1.5">
								<span className="font-[600]">Population: </span>
								{formatNumber(population)}
							</div>
							<div className="pb-1.5">
								<span className="font-[600]">Region: </span>
								{region}
							</div>
							<div className="pb-1.5">
								<span className="font-[600]">Capital: </span>
								{capital}
							</div>
						</div>
					</div>
				</Link>
			</motion.div>
		</div>
	);
};

export default Country;
