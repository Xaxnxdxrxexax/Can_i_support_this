import Search from "./Search";
import "./styles/Header.css";

export default function Header({ setmoviesList }) {
  return (
    <>
      <header>
        <h2>Can i support this?</h2>
        <Search setmoviesList={setmoviesList} />
        <a href="_blank">About me</a>
      </header>
    </>
  );
}
