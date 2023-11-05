import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<Link to={"/"} className="back-button inline-block shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]  text-darkBlueLmText font-[600] mt-10 sm:mt-20">
			<div className="flex items-center gap-3 px-6 sm:px-10 py-2">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
					<path fill="darkBlueLmText" opacity="0.9" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
				</svg>
				<span className="text-md font-light">Back</span>
			</div>
		</Link>
	);
};

export default BackButton;
