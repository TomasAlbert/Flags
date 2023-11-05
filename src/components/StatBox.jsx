const StatBox = ({ children, statName, styles }) => {
	return (
		<div className={`${styles ? "pb-3 sm:pb-2 flex gap-1" + styles : "pb-3 sm:pb-2 flex gap-1"}`}>
			<span className="font-[600]">{statName}</span>
			{children}
		</div>
	);
};

export default StatBox;
