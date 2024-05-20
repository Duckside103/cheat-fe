import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://smart-guy.vercel.app/question/"
      );
      setData(data.result);
    })();
  }, []);

  return data;
}

export default useAll;
