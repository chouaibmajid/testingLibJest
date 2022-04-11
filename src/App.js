import React, { useEffect } from "react";
import { getDataApi } from "./utilss.js/getDataApi";
function App() {
  // useEffect(() => {
  //   getDataApi().then(data => console.log(data))
  // },[])
  const getDataInComponenet = async () => {
    try {
      const data = await getDataApi();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataInComponenet();
  }, []);
  return <div>App</div>;
}

export default App;
