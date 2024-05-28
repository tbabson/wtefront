import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Wrapper from "../StyledPages/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            <span>Cart</span>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
