import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Draw from "./pages/Draw.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountriesProvider } from "./context/CountriesContext.jsx";
import Header from "./components/Header.jsx";
const App = () => {
	return (
		<BrowserRouter>
			<CountriesProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<Detail />} />
					<Route path="/draw" element={<Draw />} />
				</Routes>
			</CountriesProvider>
		</BrowserRouter>
	);
};

export default App;
