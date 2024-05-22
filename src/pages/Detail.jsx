import { useNavigate, useParams } from "react-router-dom";
// import useDetail from "../hooks/useDetail";
import { useState } from "react";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  console.log(">> Check | navigate:", navigate);
  let { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [_id, number] = id.split("ahihi");

  const [value, setValue] = useState("");
  const [numberVal, setNumberVal] = useState(number);

  // const detail = useDetail(_id);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumberVal(e.target.value);
  };

  const handleSubmit = async () => {
    await axios.post("https://smart-guy.vercel.app/answer", {
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
        flexDirection: "column",
      }}
    >
      <div>
        <input type="text" value={numberVal} onChange={handleChangeNumber} />
        <input type="text" autoFocus value={value} onChange={handleChange} />
        <button onClick={handleSubmit} disabled={!value}>
          Submit
        </button>
      </div>
      {/* <img width={1400} src={detail.html} /> */}
    </div>
  );
};

export default Detail;
