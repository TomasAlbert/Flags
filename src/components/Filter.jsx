import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

		animate(
			"ul",
			{
				clipPath: isOpen ? "inset(0% 0% 0% 0% round 10px)" : "inset(10% 50% 90% 50% round 10px)",
			},
			{
				type: "spring",
				bounce: 0,
				duration: 0.5,
			}
		);

		animate("li", isOpen ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.3, filter: "blur(20px)" }, {
			duration: 0.2,
			delay: isOpen ? staggerMenuItems : 0,
		});
	}, [isOpen]);

	return scope;
}

export default function Filter({ onContinentSelect, selectedContinent }) {
	const [isOpen, setIsOpen] = useState(false);
	const scope = useMenuAnimation(isOpen);
	const handleItemClick = (value) => {
		onContinentSelect(value);
		setIsOpen(false);
	};
	return (
		<nav className="filter mt-6 lg:mt-0 bg-white relative rounded-lg max-w-[260px] w-full" ref={scope}>
			<motion.button className="text-darkBlueLmText text-md py-4 px-6  w-full flex items-center justify-between" whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
				{selectedContinent ? selectedContinent : "Filter by region"}
				<div className="arrow" style={{ transformOrigin: "50% 55%" }}>
					<svg xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 512 512">
						<path fill="black" opacity="0.6" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
					</svg>
				</div>
			</motion.button>
			<ul
				className="bg-white font-[600] flex cursor-pointer flex-col gap-2 absolute w-full z-10 top-[60px] left-0 py-4 px-6 "
				style={{
					pointerEvents: isOpen ? "auto" : "none",
					clipPath: "inset(10% 50% 90% 50% round 10px)",
				}}
			>
				<li onClick={() => handleItemClick("All")} className="hover:underline hover:underline-offset-4">
					All
				</li>
				<li onClick={() => handleItemClick("Africa")} className="hover:underline hover:underline-offset-4">
					Africa
				</li>
				<li onClick={() => handleItemClick("Americas")} className="hover:underline hover:underline-offset-4">
					America
				</li>
				<li onClick={() => handleItemClick("Asia")} className="hover:underline hover:underline-offset-4">
					Asia
				</li>
				<li onClick={() => handleItemClick("Europe")} className="hover:underline hover:underline-offset-4">
					Europe
				</li>
				<li onClick={() => handleItemClick("Oceania")} className="hover:underline hover:underline-offset-4">
					Oceania
				</li>
			</ul>
		</nav>
	);
}
