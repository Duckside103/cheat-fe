import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useDetail(id) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/question/${id}`);
      setData(data.result);
    })();
  }, [id]);

  return data;
}

export default useDetail;
