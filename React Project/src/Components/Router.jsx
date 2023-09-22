import { Routes, Route } from "react-router-dom";
import Registered from "./Registered";
import HomePage from "./HomePage";
import About from "./About";
import Login from "./Login";
import Logout from "../pages/Logout";
import BusinessCreate from "../pages/BusinessCreate";
import MyCard from "./MyCard";
import EditCard from "../pages/EditCard";
import Favcard from "../pages/Favcard";

const Router = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage theme={props.theme} userType={props.userType}></HomePage>
        }
      />
      <Route path="/about" element={<About theme={props.theme}></About>} />
      <Route
        path="/register"
        element={<Registered theme={props.theme}></Registered>}
      />
      <Route
        path="/login"
        element={
          <Login theme={props.theme} setuserType={props.setuserType}></Login>
        }
      />
      <Route path="/logout" element={<Logout userType={props.userType} />} />
      <Route path="/business-create" element={<BusinessCreate />} />
      <Route path="/my-card" element={<MyCard />} />
      <Route path="/card-edit/:cardId" element={<EditCard />} />
      <Route path="/card-fav/" element={<Favcard />} />
    </Routes>
  );
};

export default Router;
