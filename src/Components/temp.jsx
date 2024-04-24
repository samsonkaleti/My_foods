<div className="resDetailsContainer">
  <div className="restitles">
    <div className="rescard">
      <div className="resDetails">
        <h1 className="heading">{name}</h1>
        <h3>{cuisines?.join(",")}</h3>
      </div>
      <div className="ratingImgContainer">
        <div className="rating">
          <h1 className="star">
            <FaStar />
          </h1>
          <h1 className="star">{avgRatingString}</h1>``
        </div>
        <hr className="hrs" />
        <div className="ratingCount">
          <h5>{totalRatingsString} </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="cycle_container">
    <h3 className="cycle">
      <MdOutlineDeliveryDining />
    </h3>
    <h3>{feeDetails?.message} </h3>
  </div>
  <hr />
  <div className="TimeCostContainer">
    <div className="first">
      <div className="time">
        <h3 className="timeLogo">
          <FaClockRotateLeft />
        </h3>
        <h3>{sla?.deliveryTime} MINS</h3>
      </div>
    </div>

    <h2>&</h2>
    <div className="first">
      <h3 className="rupee">
        <HiOutlineCurrencyRupee />
      </h3>
      <h3>{costForTwoMessage}</h3>
    </div>
  </div>

  <div className="cupanContainer">
    {offers.map((item) => (
      <div className="cardcontainer" key={uuidv4()}>
        <h1 className="heading2">{item?.info?.header}</h1>
        <h1 className="heading2">{item?.info?.description}</h1>
      </div>
    ))}
  </div>

  <div className="">
    <h1>{title}</h1>
    <hr />

    
  </div>
</div>;




{
  itemCards.map((eachItem) => {
    return (
      <div className="menuContainer" id={eachItem?.card?.info?.name}>
        <div className="">
          <p className="veg_nonVeg">
            {eachItem.card.info.itemAttribute.vegClassifier}
          </p>
          <h1 className="name_Item">{eachItem?.card?.info?.name}</h1>
          <p className="description">
            - ₹
            {eachItem.card.info.price
              ? eachItem.card.info.price / 100
              : eachItem.card.info.defaultPrice / 100}
          </p>
          <p className="description2">{eachItem?.card?.info?.description}</p>
        </div>

        <div className="imagecontainer">
          <img
            src={COULD_IMG + eachItem?.card?.info?.imageId}
            alt="menuItem"
            className="recImg"
          />
        </div>
      </div>
    );
  });
}