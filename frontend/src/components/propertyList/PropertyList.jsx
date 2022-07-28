import useFetch from "../../hooks/useFetch";
import "./PropertyList.scss";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType")

  console.log(data)

  const images = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
  ]

  return (
    <div className="prop_list">
      {loading ? "Loading data..." :
        <>
          {data && images.map((image,index) => (

            <div className="prop_items">
              <img
                src={image}
                alt=""
              />
              <div className="prop_titles">
                <h1>{data[index].type}</h1>
                <h2>{data[index].count} {data[index].type}</h2>
              </div>
            </div>))}


        </>}
    </div>
  );
};

export default PropertyList;
