import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  //When we're loading an API request, the loading state will be true. If there's data it will store in the data state. otherwise it will set to error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //While fetching data, setLoading to true
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      //When fetching is done setLoading to false
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetchData = async () => {
    //While fetching data, setLoading to true
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(true);
    }

    //When fetching is done setLoading to false
    setLoading(false);
  };

  return { data, loading, error, reFetchData };
};

export default useFetch;
