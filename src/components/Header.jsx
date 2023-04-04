import Search from "./Search";
import "./styles/Header.css";
import { Link } from "react-router-dom";

export default function Header({ setmoviesList }) {
  return (
    <>
      <header>
        <Link to="/">
          <h2>Can i support this?</h2>
        </Link>
        <Search setmoviesList={setmoviesList} />
        <Link to="/about-me">
          <p>About me</p>
        </Link>
      </header>
    </>
  );
}
