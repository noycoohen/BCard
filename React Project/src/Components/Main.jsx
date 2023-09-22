import Router from "./Router";
import "../Styles/Main.css";
export default function Main(props) {
  return (
    <>
      <Router
        userType={props.userType}
        theme={props.theme}
        setuserType={props.setuserType}
      />
    </>
  );
}
