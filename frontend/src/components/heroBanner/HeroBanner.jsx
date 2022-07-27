import useFetch from "../../hooks/useFetch";
import "./HeroBanner.scss";

const HeroBanner = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Boston,Maine,Haverhill")

  console.log(data);

  return (
    <div className="hero_banner">
      {loading ? "Loading data..." :<><div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>Boston</h1>
          {/* This condition is used to show property if it has only 1 show Property if it's more than 1 show Properties */}
          <h2>{`${data[0] > 1? `${data[0]} Properties`: `${data[0]} Property`}`}</h2>
        </div>
      </div>

      <div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>Maine</h1>
          <h2>{`${data[1] > 1? `${data[1]} Properties`: `${data[1]} Property`}`}</h2>
        </div>
      </div>
      <div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>Haverhill</h1>
          <h2>{`${data[2] > 1? `${data[2]} Properties`: `${data[2]} Property`}`}</h2>
        </div>
      </div></>}
    </div>
  );
};

export default HeroBanner;
