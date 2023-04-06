import Search from "./Search";
import "./styles/Header.css";
import { Link } from "react-router-dom";

export default function Header({ setmoviesList }) {
  return (
    <>
      <header>
        <Link to="/">
          <h2>Should i watch this movie?</h2>
        </Link>
        <Search setmoviesList={setmoviesList} />
        <Link to="/about-me" className="aboutMeLink">
          <p>About me</p>
        </Link>
      </header>
    </>
  );
}
