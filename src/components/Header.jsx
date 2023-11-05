import ThemeSwitch from "./ThemeSwitch ";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="shadow-md text-darkBlueLmText">
			<nav className="container px-6 mx-auto py-6 flex justify-between items-center">
				<Link to={"/"}>
					<h1 className="text-2xl font-bold">Where in the world ?</h1>
				</Link>
				<ThemeSwitch />
			</nav>
		</header>
	);
};

export default Header;
