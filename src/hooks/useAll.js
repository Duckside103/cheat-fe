import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/question/");
      setData(data.result);
    })();
  }, []);

  return data;
}

export default useAll;
