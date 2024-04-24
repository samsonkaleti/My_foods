import { COULD_IMG } from '../utils/content';

const ReCard = (props) => {
	const { id, name, cloudinaryImageId, locality, areaName, avgRating, cuisines } = props.resData.info;
	return (
		// <div className="cardContainer">
		<div className="card">
			<div className="imgContainer">
				<img src={COULD_IMG + cloudinaryImageId} alt="cardImg" className="cardImg" />
			</div>

			<div className="detailsContainer">
				<h3 className="name">{name}</h3>
				<h3 className="rating">
					<span> AvgRating : {avgRating}</span> <br />
					Delivery Time : 35-40 min
				</h3>

				<h3 className="name"> Locality : {locality}</h3>

				<h3 className="dishes">
					{' '}
					cuisines : <span className="cuisines">{cuisines.join(',')}</span>
				</h3>
			</div>
		</div>
	);
};

export default ReCard;
