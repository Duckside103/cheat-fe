import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./pages/All";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
