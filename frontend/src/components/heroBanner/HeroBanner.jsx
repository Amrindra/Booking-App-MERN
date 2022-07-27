import useFetch from "../../hooks/useFetch";
import "./HeroBanner.scss";

const HeroBanner = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,Madrid,London")

  console.log(data);

  return (
    <div className="hero_banner">
      <div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>New Hamshire</h1>
          <h2>123 new hamshire</h2>
        </div>
      </div>

      <div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>New Hamshire</h1>
          <h2>123 new hamshire</h2>
        </div>
      </div>
      <div className="hero_banner_item">
        <img
          src="https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg"
          alt=""
          className="hero_banner_image"
        />
        <div className="hero_banner_titles">
          <h1>New Hamshire</h1>
          <h2>123 new hamshire</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
