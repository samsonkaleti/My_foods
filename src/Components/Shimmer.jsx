const Shimmer = () => {
	return (
		<div>
			<div className="Searchbar" />
			<div className="container">
				{Array.from({ length: 24 }).map((i, e) => {
					return <div key={i} className="shimmerCard" />;
				})}
			</div>
		</div>
	);
};

export default Shimmer;
