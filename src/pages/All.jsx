import { Link } from "react-router-dom";
import useAll from "../hooks/useAll";

const All = () => {
  const all = useAll();

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Time</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {all.map((a, i) => (
          <tr key={a._id}>
            <td>{i + 1}</td>
            <td>{a.date}</td>
            <td>
              <Link to={`${a._id}ahihi${i + 1}`}>Go to link</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default All;
