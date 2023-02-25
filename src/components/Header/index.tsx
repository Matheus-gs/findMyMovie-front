import { SearchInput } from "../SearchInput";
import "./style.scss";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="row-flex">
        <h5 className="logo">FindMyMovie</h5>
        <div className="links">
          <NavLink to="home">Home</NavLink>
          <NavLink to="favorites">Favorites</NavLink>
        </div>
      </div>

      <SearchInput />
    </header>
  );
}
