import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
function Nav({ onSearch, logout }) {
  return (
    <div className={style.Nav}>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={onSearch} />
      <button
        onClick={() => {
          logout();
        }}
      >
        Salir
      </button>
    </div>
  );
}
export default Nav;
