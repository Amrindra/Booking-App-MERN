import useFetch from "../../hooks/useFetch";
import "./HeroBanner.scss";

const HeroBanner = () => {
  const countByCityURL = "/hotels/countByCity?cities=Boston,Maine,Haverhill";
  const { data, loading } = useFetch(countByCityURL);
  // console.log(data);

  const heroBannerData = [
    {
      cityName: "Boston",
      image:
        "https://images.pexels.com/photos/776030/pexels-photo-776030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      property: `${
        data[0] > 1 ? `${data[0]} Properties` : `${data[0]} Property`
      }`,
    },
    {
      cityName: "Maine",
      image:
        "https://images.pexels.com/photos/9991156/pexels-photo-9991156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      property: `${
        data[0] > 1 ? `${data[0]} Properties` : `${data[0]} Property`
      }`,
    },
    {
      cityName: "Haverhill",
      image:
        "https://media.istockphoto.com/photos/haverhill-massachusetts-along-the-merrimack-river-picture-id1263721004?b=1&k=20&m=1263721004&s=612x612&w=0&h=1uNVOWeJP9S2OSPR7nz8FPMNVSqgH4OcUWEfuuv8qhU=",
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
            <div className="hero_banner_item" key={item.image}>
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
