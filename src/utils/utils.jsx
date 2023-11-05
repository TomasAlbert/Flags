export function formatBorders(borders) {
	return borders.map((border, i) => (
		<div key={i} className="inline-block py-1 px-4 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
			{border}
		</div>
	));
}
