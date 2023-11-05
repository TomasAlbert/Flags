import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
const contentStyle = {
	maxWidth: "600px",
	width: "90%",
};
const Draw = () => {
	const navigate = useNavigate();
	const saveableCanvasRef = useRef(null);
	const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black
	const [brushRadius, setBrushRadius] = useState(5); // Default brush radius
	const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#ffffff");
	const [author, setAuthor] = useState("");
	const [err, setErr] = useState(false);
	const handleUndo = () => {
		saveableCanvasRef.current.undo();
	};

	const handleClear = () => {
		saveableCanvasRef.current.clear();
	};

	const handleSave = () => {
		const data = saveableCanvasRef.current.getDataURL();
		// Create an object to send in the request body
		const requestBody = {
			flag: data,
			bg: canvasBackgroundColor,
			author: author,
		};
		console.log(requestBody.author);
		if (requestBody.author === "") {
			console.log(requestBody.author);
			setErr(true);
		} else {
			fetch("https://worrisome-wasp-trousers.cyclic.app/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Set the content type to JSON
				},
				body: JSON.stringify(requestBody), // Convert the object to a JSON string
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});

			handleClear();
			navigate("/custom-flags");
			setErr(false);
		}
	};

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value);
	};
	const handleColorBgChange = (event) => {
		setCanvasBackgroundColor(event.target.value);
	};
	const handleBrushRadiusChange = (event) => {
		setBrushRadius(event.target.value);
	};

	return (
		<>
			<div className="draw-wrapper mt-16 max-w-[850px] w-full m-auto px-6">
				<p className="font-bold  text-center text-3xl mb-10">🎨Draw you own flag🎨</p>
				<div className="md:flex justify-between">
					<div className="flex items-center mb-4">
						<span>Select Your Color</span>
						<input type="color" value={selectedColor} onChange={handleColorChange} />
					</div>

					<label>
						Select Brush Thickness:
						<input type="range" min="1" max="20" value={brushRadius} onChange={handleBrushRadiusChange} />
					</label>
				</div>
				<div className="flex items-center mb-4">
					<span>Select Your Backgorund Color</span>
					<input type="color" value={canvasBackgroundColor} onChange={handleColorBgChange} />
				</div>
				<div className="m-auto ">
					<CanvasDraw
						className="w-full shadow-md aspect-video"
						canvasWidth="600"
						ref={saveableCanvasRef}
						backgroundColor={canvasBackgroundColor}
						hideGrid={true}
						brushColor={selectedColor}
						brushRadius={brushRadius} // Set the brush radius based on the brushRadius state
					></CanvasDraw>
					<div className="mt-3 flex gap-3 mb-5">
						<button onClick={handleUndo} className="shadow-md px-6 py-3 bg-white">
							Undo
						</button>
						<button onClick={handleClear} className="shadow-md px-6 py-3 bg-white">
							Clear
						</button>
					</div>
					<div className="w-full flex justify-center">
						<Popup trigger={<button className="font-[600] bg-black shadow-md px-6 py-3 text-red-500"> Submit </button>} modal contentStyle={contentStyle}>
							{(close) => (
								<div className="modal">
									<a className=" ml-auto close cursor-pointer" onClick={close}>
										&times;
									</a>
									<em className="mt-3  block font-bold text-red-500">! You can't edit your flag after submit !</em>
									<div className="header my-2 font-bold">Submit your submission nickname </div>
									<input onChange={(e) => setAuthor(e.target.value)} className="block mb-3 border border-1px py-2 px-3" type="text" placeholder="Write You name..." />
									{err ? <em className="mb-3 block font-bold text-red-500">Name can't be empty!</em> : ""}
									<button onClick={handleSave} className="font-[600] bg-black shadow-md px-6 py-3 text-red-500">
										Submit
									</button>
								</div>
							)}
						</Popup>
					</div>
				</div>
			</div>
		</>
	);
};

export default Draw;
