import {v4 as uuidv4} from 'uuid'

const Shimmer = () => {
  return (
    <div>
      <div className="cont">
        <div className="Searchbar" />
        <div className="SearchButton2"></div>
        <div className="filterButton2"></div>
      </div>

      <div className="container">
        {Array.from({ length: 24 }).map((i, e) => {
          return <div key={uuidv4()} className="shimmerCard" />;
        })}
      </div>
    </div>
  );
};

export default Shimmer;
