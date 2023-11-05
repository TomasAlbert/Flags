import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const ThemeSwitch = () => {
	const [isDarkMode, setDarkMode] = useState(false);
	const toggleDarkMode = (checked) => {
		setDarkMode(checked);
		document.querySelector("html").classList.toggle("dark");
	};

	return (
		<>
			<DarkModeSwitch style={{}} checked={isDarkMode} onChange={toggleDarkMode} size={20} />
		</>
	);
};

export default ThemeSwitch;
