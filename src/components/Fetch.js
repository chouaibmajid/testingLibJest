import axios from "axios";
import React from "react";

function Fetch() {
  const [data, setData] = React.useState(null);
  const getMovies = async () => {
    const API_KEY = "c89646cb9c2f9f7a6144c074fff0e9c7";
    const baseURL = "https://api.themoviedb.org/3";

    const fetchTopRated = `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=20`;
    try {
      const { data } = await axios.get(fetchTopRated);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getMovies().then((data) => setData(data));
  }, []);
  if (!data) return <div>...Loading </div>;
  // eslint-disable-next-line jsx-a11y/aria-role
  return <div role="data">Fetch</div>;
}

export default Fetch;
