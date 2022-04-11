import React, { useEffect } from "react";
import axios from "axios";

const Getdata = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  const getDataAXios = async () => {
    try {
      const { data } = await axios.get("/server");
      setData(data);
      setError("")
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getDataAXios()
  }, []);
  if (error) return <div role="alert">un probléme est survenue</div>;
  return (
    <div>
      {data?.map((item) => (
        <img src={item.src} alt={item.name} />
      ))}
    </div>
  );
};

export default Getdata;
