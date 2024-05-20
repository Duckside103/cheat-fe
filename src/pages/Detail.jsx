import { useNavigate, useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { useState } from "react";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [_id, number] = id.split("ahihi");
  console.log(">> Check | Detail | _id, number:", _id, number);

  const [value, setValue] = useState("");
  const [numberVal, setNumberVal] = useState(number);

  const detail = useDetail(_id);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumberVal(e.target.value);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/answer", {
      number,
      answer: value,
    });

    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: detail.html }} />
      <input type="text" value={numberVal} onChange={handleChangeNumber} />
      <input type="text" autoFocus value={value} onChange={handleChange} />
      <button onClick={handleSubmit} disabled={!value}>
        Submit
      </button>
    </div>
  );
};

export default Detail;
