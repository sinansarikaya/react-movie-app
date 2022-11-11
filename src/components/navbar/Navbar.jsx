import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoImg, Nav, NavAside, Button } from "./Nav.styled";
import homeSvg from "../../assets/logo-no-text.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { logOut } from "../../auth/firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
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
          {!currentUser ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="displayName">{currentUser?.displayName}</span>
              </li>
              <li>
                <Button onClick={() => logOut(navigate)}>Logout</Button>
              </li>
            </>
          )}
        </NavAside>
      </ul>
    </Nav>
  );
};

export default Navbar;
