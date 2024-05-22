import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useDetail(id) {
  const [data, setData] = useState({});
  console.log(">> Check | data:", data);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://smart-guy.vercel.app/question/${id}`
      );
      setData(data.result);
    })();
  }, [id]);

  return data;
}

export default useDetail;
