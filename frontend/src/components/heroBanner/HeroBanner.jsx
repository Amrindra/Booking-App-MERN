import useFetch from "../../hooks/useFetch";
import "./HeroBanner.scss";

const HeroBanner = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=Boston,Maine,Haverhill"
  );
  // console.log(data);

  const heroBannerData = [
    {
      cityName: "Boston",
      image:
        "https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg",
      property: `${
        data[0] > 1 ? `${data[0]} Properties` : `${data[0]} Property`
      }`,
    },
    {
      cityName: "Maine",
      image:
        "https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg",
      property: `${
        data[0] > 1 ? `${data[0]} Properties` : `${data[0]} Property`
      }`,
    },
    {
      cityName: "Haverhill",
      image:
        "https://a.cdn-hotels.com/gdcs/production79/d1680/d7d5bf20-9335-409b-b6a5-878f5c502e86.jpg",
      property: `${
        data[0] > 1 ? `${data[0]} Properties` : `${data[0]} Property`
      }`,
    },
  ];

  return (
    <div className="hero_banner">
      {loading ? (
        "Loading data..."
      ) : (
        <>
          {heroBannerData.map((item) => (
            <div className="hero_banner_item">
              <img src={item.image} alt="" className="hero_banner_image" />
              <div className="hero_banner_titles">
                <h1>{item.cityName}</h1>
                {/* This condition is used to show property if it has only 1 show Property if it's more than 1 show Properties */}
                <h2>{item.property}</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HeroBanner;
