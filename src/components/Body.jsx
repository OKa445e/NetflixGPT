
import Login from "./Login";
import { Routes, Route,} from "react-router-dom";
import Browser from "./Browser";


const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/browse" element={<Browser />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;
