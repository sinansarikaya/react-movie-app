import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoImg, Nav, NavAside, Button } from "./Nav.styled";
import homeSvg from "../../assets/logo-no-text.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { logOut } from "../../auth/firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const items = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <LogoImg src={homeSvg} />
          </Link>
        </li>
        <NavAside>
          {currentUser || items ? (
            <>
              <li>
                <span className="displayName">
                  {currentUser?.displayName || items?.displayName}
                </span>
              </li>
              <li>
                <Button onClick={() => logOut(navigate)}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </NavAside>
      </ul>
    </Nav>
  );
};

export default Navbar;
